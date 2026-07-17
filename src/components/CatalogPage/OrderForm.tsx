"use client";
import axios from "axios";
import { useLocale, useTranslations } from "next-intl";
import { useState } from "react";

import { FormInModalProps } from "@/types/modalProps";
import { selectedLink } from "@/utils/selectedLink";

import { Button } from "../shared/Button";

const nameRegex =
  /^(?=(.*\S.*\S))[^\-\s][a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻіІїЇґҐєЄа-яА-Я'"`\-\sʼ’]+$/;
const emailRegex =
  /^(?!.*\.\.)(?!.*[.-]@)(?!@.*[.-]$)([a-zA-Z0-9._%+\-'"]+@(?=[a-zA-Z0-9.-]{1,63}\.[a-zA-Z]{2,}$)(?![.-])[a-zA-Z0-9.-]+(?<![.-]))$/;

export const OrderForm = ({ notificationHandler }: FormInModalProps) => {
  const locale = useLocale();

  const [formData, setFormData] = useState({
    name: "",
    organization: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
  });
  const t = useTranslations("HomePage");
  const tButton = useTranslations("Buttons");

  const validate = () => {
    const newErrors: typeof errors = { name: "", email: "" };
    let valid = true;

    if (!formData.name.trim()) {
      newErrors.name = t("nullName");
      valid = false;
    } else if (!nameRegex.test(formData.name)) {
      newErrors.name = t("errorName");
      valid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = t("nullEmail");
      valid = false;
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = t("errorEmail");
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;

    const onSendData = async () => {
      const data = {
        name: formData.name,
        organization: formData.organization,
        email: formData.email,
        phone: formData.phone,
        comment: formData.message,
      };
      await axios.post("/api/consultation", data, {
        headers: { "Content-Type": "application/json" },
      });

      setFormData({
        name: "",
        organization: "",
        email: "",
        phone: "",
        message: "",
      });
    };

    try {
      await notificationHandler(onSendData);
    } catch (error) {
      console.error("Відправка не вдалася:", error);
    }
  };

  const inputClass =
    "mt-6 tab:mt-0 mb-7 tab:mb-4 placeholder:text-sm13 block w-full bg-transparent border-0 pb-4 tab:pb-[10px] tab:pt-[15px] pl-[18px] pr-4 tab:pl-7 font-exo placeholder:uppercase font-semibold text-title placeholder:text-text group-focus:outline-none focus:ring-0";

  return (
    <>
      <h2 className="mb-4 text-center font-exo text-2xl13 font-semibold tab:text-4xl12">
        {t("orderFormTitle")}
      </h2>

      <form
        onSubmit={handleSubmit}
        className="mx-auto w-full max-w-[684px] text-left"
      >
        <div className="tab:flex tab:gap-5">
          <div className="group relative tab:w-1/2">
            <label htmlFor="name"></label>
            <input
              type="text"
              id="name"
              placeholder={t("formName")}
              value={formData.name}
              onChange={e => setFormData({ ...formData, name: e.target.value })}
              className={`${inputClass} `}
            />
            <div className="absolute bottom-0 left-0 h-3 w-full border border-t-0 border-text transition-all duration-500 ease-in group-focus:border-title" />
            {errors.name && (
              <p className="absolute bottom-[-16px] left-0 mt-1 text-error">
                {errors.name}
              </p>
            )}
          </div>
          <div className="group relative tab:w-1/2">
            <label htmlFor="organization"></label>
            <input
              type="text"
              id="organization"
              placeholder={t("formOrganization")}
              value={formData.organization}
              onChange={e =>
                setFormData({ ...formData, organization: e.target.value })
              }
              className={`${inputClass} `}
            />
            <div className="absolute bottom-0 left-0 h-3 w-full border border-t-0 border-text transition-all duration-500 ease-in group-focus:border-title" />
          </div>
        </div>
        <div className="tab:flex tab:gap-5">
          <div className="group relative tab:w-1/2">
            <label htmlFor="email"></label>
            <input
              type="email"
              id="email"
              placeholder={t("formEmail")}
              value={formData.email}
              onChange={e =>
                setFormData({ ...formData, email: e.target.value })
              }
              className={`${inputClass}`}
            />
            <div className="absolute bottom-0 left-0 h-3 w-full border border-t-0 border-text transition-all duration-500 ease-in group-focus:border-title" />

            {errors.email && (
              <p className="absolute bottom-[-16px] left-0 mt-1 text-error">
                {errors.email}
              </p>
            )}
          </div>

          <div className="group relative tab:w-1/2">
            <label htmlFor="phone"></label>
            <input
              type="tel"
              id="phone"
              placeholder={t("formPhone")}
              value={formData.phone}
              onChange={e =>
                setFormData({ ...formData, phone: e.target.value })
              }
              className={`${inputClass}`}
            />
            <div className="absolute bottom-0 left-0 h-3 w-full border border-t-0 border-text transition-all duration-500 ease-in group-focus:border-title" />
          </div>
        </div>
        <div className="group relative mb-7">
          <label htmlFor="message"></label>
          <textarea
            id="message"
            placeholder={t("formAboutProject")}
            maxLength={300}
            value={formData.message}
            onChange={e =>
              setFormData({ ...formData, message: e.target.value })
            }
            className={`${inputClass}`}
          />
          <div className="absolute bottom-0 left-0 h-3 w-full border border-t-0 border-text transition-all duration-500 ease-in group-focus:border-title" />
        </div>

        <div className="mt-4 tab:mt-[45px] tab:flex tab:gap-5">
          <div className="mb-10 flex gap-2 text-sm13 tab:mb-0 tab:w-1/2">
            <div>
              <span className="mt-1 block h-2 w-2 bg-accent"></span>
            </div>
            <p>
              {t.rich("policyAccept", {
                policy: chunk => (
                  <a
                    href={selectedLink(locale)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline underline"
                  >
                    {chunk}
                  </a>
                ),
              })}
            </p>
          </div>

          <div className="flex justify-center tab:w-1/2 tab:justify-end">
            <Button
              text={tButton("callUs")}
              submit
              disabled={status === "Завантаження..." ? true : false}
            />
          </div>
        </div>
      </form>
    </>
  );
};
