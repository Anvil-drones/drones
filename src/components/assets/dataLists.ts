import { useTranslations } from "next-intl";

import { ProjectType } from "../shared/SliderGallery";

export const getServicesList = (t: ReturnType<typeof useTranslations>) => [
  {
    title: t("specializationItemTitle1"),
    text: t("specializationItemDescription1"),
    list: [
      t("specList1Item1"),
      t("specList1Item2"),
      t("specList1Item3"),
      t("specList1Item4"),
      t("specList1Item5"),
    ],
    imageURL: "/images/image1.jpg",
  },
  {
    title: t("specializationItemTitle2"),
    text: t("specializationItemDescription2"),
    imageURL: "/images/image22.jpg",
  },
  {
    title: t("specializationItemTitle3"),
    text: t("specializationItemDescription3"),
    imageURL: ["/images/image3.jpg", "/images/image4.jpg"],
  },
  {
    title: t("specializationItemTitle4"),
    text: t("specializationItemDescription4"),
    full: true,
  },
];

export const trustedList = [
  "/images/emblem1.png",
  "/images/emblem2.png",
  "/images/emblem3.png",
  "/images/emblem4.png",
];

export const projectsGallery = (
  t: ReturnType<typeof useTranslations>
): ProjectType => [
  { title: t("slide1Title"), imageURL: "/images/slide1.jpg" },
  { title: t("slide2Title"), videoURL: "/videos/working-team.mp4" },
  { title: t("slide3Title"), imageURL: "/images/image4.jpg" },
  { title: t("slide4Title"), videoURL: "/videos/training-ground.mp4" },
  { title: "Hammer 10", videoURL: "/videos/hammer-10-1.mp4" },
  { title: "Hammer 10", videoURL: "/videos/hammer-10-2.mp4" },
  { title: "Hammer 10", videoURL: "/videos/hammer-10-3.mp4" },
  { title: "Hammer 10", videoURL: "/videos/hammer-10-4.mp4" },
  { title: "Hammer 13", videoURL: "/videos/hammer-13-1.mp4" },
  { title: "Vulcan 10", videoURL: "/videos/vulcan-10-1.mp4" },
];
