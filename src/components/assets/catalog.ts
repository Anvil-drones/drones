import { useTranslations } from "next-intl";

export type DroneFeature = {
  label: string;
  value: string;
};

export type DroneEquipment = {
  label: string;
  value: string;
};
export type DroneFilterType =
  "all" | "fpv-opt" | "fpv-radio" | "fpv-cargo" | "interceptor";

export type DroneFilter = { name: string; type: DroneFilterType };

export type Drone = {
  slug: string;
  type: DroneFilterType;
  images: string[];
  uk: {
    title: string;
    subtitle: string;
    features: DroneFeature[];
    equipment: DroneEquipment[];
  };
  en: {
    title: string;
    subtitle: string;
    features: DroneFeature[];
    equipment: DroneEquipment[];
  };
};

export const dronesList: Drone[] = [
  {
    slug: "vulcan-10",
    type: "fpv-radio",
    images: [
      "/images/catalog/vulcan-10/1.jpg",
      "/images/catalog/vulcan-10/2.jpg",
      "/images/catalog/vulcan-10/3.jpg",
    ],
    uk: {
      title: "БПЛА “VULCAN 10”",
      subtitle: "10-дюймовий FPV дрон",

      features: [
        {
          label: "Максимальна дальність польоту",
          value: "30 км",
        },
        {
          label: "Навантаження бойової частини",
          value: "до 3 кг",
        },
        {
          label: "Час польоту",
          value: "до 30 хв",
        },
      ],

      equipment: [
        {
          label: "Рама",
          value: "10 inch Carbon",
        },
        {
          label: "Мотори",
          value: "3115 900 KV",
        },
        {
          label: "Політний стек",
          value: "F405 60A 6S",
        },
        {
          label: "Приймач",
          value: "Radiomaster Dual Band Xross Gemini ExpressLRS",
        },
        {
          label: "Пропелер",
          value: "1050 Gefman",
        },
        {
          label: "Акумулятор літій-іон",
          value: "6S4P 20 000 мА·год",
        },
        {
          label: "Камера",
          value: "Caddx Ratel PRO 1500 TVL/Caddx 384/640/Walksnail",
        },
        {
          label: "Антена відео",
          value: "VTX 2501 Skyzone 5.8/VTX THOR T67 6.0–7.2 GHz",
        },
        {
          label: "Плата ініціації",
          value: "Інерціальна кодифікована",
        },
      ],
    },
    en: {
      title: "UAV “VULCAN 10”",
      subtitle: "10 inch FPV drone",

      features: [
        {
          label: "Maximum flight range",
          value: "30 km",
        },
        {
          label: "Payload capacity",
          value: "up to 3 kg",
        },
        {
          label: "Flight time",
          value: "up to 30 min",
        },
      ],
      equipment: [
        {
          label: "Frame",
          value: "10 inch Carbon",
        },
        {
          label: "Motors",
          value: "3115 900 KV",
        },
        {
          label: "Flight stack",
          value: "F405 60A 6S",
        },
        {
          label: "Receiver",
          value: "Radiomaster Dual Band Xross Gemini ExpressLRS",
        },
        {
          label: "Propeller",
          value: "1050 Gefman",
        },
        {
          label: "Li-ion battery",
          value: "6S4P 20,000 mAh",
        },
        {
          label: "Camera",
          value: "Caddx Ratel PRO 1500 TVL / Caddx 384 / 640 / Walksnail",
        },
        {
          label: "Video antenna",
          value: "VTX 2501 Skyzone 5.8 / VTX THOR T67 6.0–7.2 GHz",
        },
        {
          label: "Initiation board",
          value: "Encoded inertial",
        },
      ],
    },
  },
  {
    slug: "vulcan-13",
    type: "fpv-radio",
    images: [
      "/images/catalog/vulcan-13/1.jpg",
      "/images/catalog/vulcan-13/2.jpg",
      "/images/catalog/vulcan-13/3.jpg",
    ],

    uk: {
      title: "БПЛА “VULCAN 13”",
      subtitle: "13-дюймовий FPV дрон",

      features: [
        {
          label: "Максимальна дальність польоту",
          value: "30 км",
        },
        {
          label: "Навантаження бойової частини",
          value: "до 4.5 кг",
        },
        {
          label: "Час польоту",
          value: "до 30 хв",
        },
      ],

      equipment: [
        {
          label: "Рама",
          value: "13 inch Carbon",
        },
        {
          label: "Мотори",
          value: "4320 350 KV або 4215 400 KV",
        },
        {
          label: "Політний стек",
          value: "F722 80A 8S",
        },
        {
          label: "Приймач",
          value: "Radiomaster Dual Band Xross Gemini ExpressLRS",
        },
        {
          label: "Пропелер",
          value: "IDFan 1380-3",
        },
        {
          label: "Акумулятор літій-іон",
          value: "8S4P 20 000 мА·год",
        },
        {
          label: "Камера",
          value: "Caddx Ratel PRO 1500 TVL / Caddx 384 / 640 / Walksnail",
        },
        {
          label: "Антена відео",
          value: "VTX 2501 Skyzone 5.8 / VTX THOR T67 6.0–7.2 GHz",
        },
        {
          label: "Плата ініціації",
          value: "Інерціальна кодифікована",
        },
      ],
    },

    en: {
      title: "UAV “VULCAN 13”",
      subtitle: "13 inch FPV drone",

      features: [
        {
          label: "Maximum flight range",
          value: "30 km",
        },
        {
          label: "Payload capacity",
          value: "up to 4.5 kg",
        },
        {
          label: "Flight time",
          value: "up to 30 min",
        },
      ],

      equipment: [
        {
          label: "Frame",
          value: "13 inch Carbon",
        },
        {
          label: "Motors",
          value: "4320 350 KV or 4215 400 KV",
        },
        {
          label: "Flight stack",
          value: "F722 80A 8S",
        },
        {
          label: "Receiver",
          value: "Radiomaster Dual Band Xross Gemini ExpressLRS",
        },
        {
          label: "Propeller",
          value: "IDFan 1380-3",
        },
        {
          label: "Li-ion battery",
          value: "8S4P 20,000 mAh",
        },
        {
          label: "Camera",
          value: "Caddx Ratel PRO 1500 TVL / Caddx 384 / 640 / Walksnail",
        },
        {
          label: "Video antenna",
          value: "VTX 2501 Skyzone 5.8 / VTX THOR T67 6.0–7.2 GHz",
        },
        {
          label: "Initiation board",
          value: "Encoded inertial",
        },
      ],
    },
  },
  {
    slug: "hammer-10",
    type: "fpv-opt",
    images: [
      "/images/catalog/hammer-10/1.jpg",
      "/images/catalog/hammer-10/2.jpg",
    ],

    uk: {
      title: "БПЛА “HAMMER 10”",
      subtitle: "10-дюймовий FPV дрон на оптоволокні",

      features: [
        {
          label: "Максимальна дальність польоту",
          value: "10–20 км (залежить від котушки)",
        },
        {
          label: "Навантаження бойової частини",
          value: "до 2 кг",
        },
        {
          label: "Час польоту",
          value: "до 30 хв",
        },
      ],

      equipment: [
        {
          label: "Рама",
          value: "10 inch Carbon",
        },
        {
          label: "Мотори",
          value: "3115 900 KV",
        },
        {
          label: "Політний стек",
          value: "F405 60A 6S",
        },
        {
          label: "Оптоволокно",
          value: "G657A2 0.25 mm",
        },
        {
          label: "Пропелер",
          value: "1050 Gefman",
        },
        {
          label: "Акумулятор літій-іон",
          value: "6S4P 20 000 мА·год",
        },
        {
          label: "Камера",
          value: "Caddx Ratel PRO 1500 TVL / Caddx 384 / 640",
        },
        {
          label: "Плата ініціації",
          value: "Інерціальна кодифікована",
        },
      ],
    },

    en: {
      title: "UAV “HAMMER 10”",
      subtitle: "10 inch Fiber-Optic FPV Drone",

      features: [
        {
          label: "Maximum flight range",
          value: "10–20 km (depending on the fiber spool)",
        },
        {
          label: "Payload",
          value: "up to 2 kg",
        },
        {
          label: "Flight time",
          value: "up to 30 min",
        },
      ],

      equipment: [
        {
          label: "Frame",
          value: "10 inch Carbon",
        },
        {
          label: "Motors",
          value: "3115 900 KV",
        },
        {
          label: "Flight stack",
          value: "F405 60A 6S",
        },
        {
          label: "Fiber optic",
          value: "G657A2 0.25 mm",
        },
        {
          label: "Propeller",
          value: "1050 Gefman",
        },
        {
          label: "Li-ion battery",
          value: "6S4P 20,000 mAh",
        },
        {
          label: "Camera",
          value: "Caddx Ratel PRO 1500 TVL / Caddx 384 / 640",
        },
        {
          label: "Initiation board",
          value: "Encoded inertial",
        },
      ],
    },
  },
  {
    slug: "hammer-13",
    type: "fpv-opt",
    images: [
      "/images/catalog/hammer-13/1.jpg",
      "/images/catalog/hammer-13/2.jpg",
    ],

    uk: {
      title: "БПЛА “HAMMER 13”",
      subtitle: "13-дюймовий FPV дрон на оптоволокні",

      features: [
        {
          label: "Максимальна дальність польоту",
          value: "15–30 км (залежить від котушки)",
        },
        {
          label: "Навантаження бойової частини",
          value: "до 3 кг",
        },
        {
          label: "Час польоту",
          value: "до 30 хв",
        },
      ],

      equipment: [
        {
          label: "Рама",
          value: "13 inch Carbon",
        },
        {
          label: "Мотори",
          value: "4320 350 KV або 4215 400 KV",
        },
        {
          label: "Політний стек",
          value: "F722 80A 8S",
        },
        {
          label: "Оптоволокно",
          value: "G657A2 0.25 mm",
        },
        {
          label: "Пропелер",
          value: "IDFan 1380-3",
        },
        {
          label: "Акумулятор літій-іон",
          value: "8S4P 20 000 мА·год",
        },
        {
          label: "Камера",
          value: "Caddx Ratel PRO 1500 TVL / Caddx 384 / 640",
        },
        {
          label: "Плата ініціації",
          value: "Інерціальна кодифікована",
        },
      ],
    },

    en: {
      title: "UAV “HAMMER 13”",
      subtitle: "13 inch Fiber-Optic FPV Drone",

      features: [
        {
          label: "Maximum flight range",
          value: "15–30 km (depending on the fiber spool)",
        },
        {
          label: "Payload",
          value: "up to 3 kg",
        },
        {
          label: "Flight time",
          value: "up to 30 min",
        },
      ],

      equipment: [
        {
          label: "Frame",
          value: "13 inch Carbon",
        },
        {
          label: "Motors",
          value: "4320 350 KV or 4215 400 KV",
        },
        {
          label: "Flight stack",
          value: "F722 80A 8S",
        },
        {
          label: "Fiber optic",
          value: "G657A2 0.25 mm",
        },
        {
          label: "Propeller",
          value: "IDFan 1380-3",
        },
        {
          label: "Li-ion battery",
          value: "8S4P 20,000 mAh",
        },
        {
          label: "Camera",
          value: "Caddx Ratel PRO 1500 TVL / Caddx 384 / 640",
        },
        {
          label: "Initiation board",
          value: "Encoded inertial",
        },
      ],
    },
  },
  {
    slug: "hammer-15",
    type: "fpv-opt",
    images: [
      "/images/catalog/hammer-15/1.jpg",
      "/images/catalog/hammer-15/2.jpg",
      "/images/catalog/hammer-15/3.jpg",
    ],

    uk: {
      title: "БПЛА “HAMMER 15”",
      subtitle: "15-дюймовий FPV дрон на оптоволокні",

      features: [
        {
          label: "Максимальна дальність польоту",
          value: "20–35 км (залежить від котушки)",
        },
        {
          label: "Навантаження бойової частини",
          value: "до 3 кг",
        },
        {
          label: "Час польоту",
          value: "до 30 хв",
        },
      ],

      equipment: [
        {
          label: "Рама",
          value: "15 inch Carbon",
        },
        {
          label: "Мотори",
          value: "5315 420 KV",
        },
        {
          label: "Політний стек",
          value: "F722 100A 8S",
        },
        {
          label: "Оптоволокно",
          value: "G657A2 0.25 mm",
        },
        {
          label: "Пропелер",
          value: "HQProp 15",
        },
        {
          label: "Акумулятор літій-іон",
          value: "20 000 мА·год",
        },
        {
          label: "Камера",
          value: "Caddx Ratel PRO 1500 TVL / Caddx 384 / 640",
        },
        {
          label: "Плата ініціації",
          value: "Інерціальна кодифікована",
        },
      ],
    },

    en: {
      title: "UAV “HAMMER 15”",
      subtitle: "15 inch Fiber-Optic FPV Drone",

      features: [
        {
          label: "Maximum flight range",
          value: "20–35 km (depending on the fiber spool)",
        },
        {
          label: "Payload",
          value: "up to 3 kg",
        },
        {
          label: "Flight time",
          value: "up to 30 min",
        },
      ],

      equipment: [
        {
          label: "Frame",
          value: "15 inch Carbon",
        },
        {
          label: "Motors",
          value: "5315 420 KV",
        },
        {
          label: "Flight stack",
          value: "F722 100A 8S",
        },
        {
          label: "Fiber optic",
          value: "G657A2 0.25 mm",
        },
        {
          label: "Propeller",
          value: "HQProp 15",
        },
        {
          label: "Li-ion battery",
          value: "20,000 mAh",
        },
        {
          label: "Camera",
          value: "Caddx Ratel PRO 1500 TVL / Caddx 384 / 640",
        },
        {
          label: "Initiation board",
          value: "Encoded inertial",
        },
      ],
    },
  },
  {
    slug: "fu-4",
    type: "interceptor",
    images: ["/images/catalog/fu-4/1.jpg", "/images/catalog/fu-4/2.jpg"],

    uk: {
      title: "БпАК “FU-4”",
      subtitle: "Дрон-перехоплювач",

      features: [
        {
          label: "Максимальна дальність польоту",
          value: "35 км",
        },
        {
          label: "Тип вибухової речовини",
          value: "Пластид 130 г або 500 г",
        },
        {
          label: "Час польоту",
          value: "до 30 хв",
        },
        { label: "Максимальна швидкість", value: "300 км" },
      ],

      equipment: [
        {
          label: "Рама",
          value: "Custom Carbon",
        },
        {
          label: "Мотори",
          value: "3115 900 KV",
        },
        {
          label: "Політний стек",
          value: "SoloGood 8S F722 100A",
        },
        {
          label: "Приймач",
          value: "Radiomaster XR4 Gemini ExpressLRS",
        },
        {
          label: "Пропелер",
          value: "Gefman 8×10",
        },
        {
          label: "Акумулятор літій-іон",
          value: "8S3P 14 000 мА·год",
        },
        {
          label: "Камера",
          value: "Caddx Ratel Pro V2 / Caddx 640",
        },
        { label: "Система навігації", value: "Sine.Link" },
        {
          label: "Антена відео",
          value: "Антена «Конюшина» 5.8/6.2 ГГц кругової поляризації",
        },
        {
          label: "Плата ініціації",
          value: "Інерціальна кодифікована",
        },
      ],
    },

    en: {
      title: "UAV “FU-4”",
      subtitle: "Interceptor drone",

      features: [
        {
          label: "Maximum flight range",
          value: "35 km",
        },
        {
          label: "Explosive type",
          value: "130 g or 500 g plastic explosive",
        },
        {
          label: "Flight time",
          value: "Up to 30 min",
        },
        { label: "Maximum speed", value: "300 Km" },
      ],

      equipment: [
        {
          label: "Frame",
          value: "Custom Carbon",
        },
        {
          label: "Motors",
          value: "3115 900 KV",
        },
        {
          label: "Flight stack",
          value: "SoloGood 8S F722 100A",
        },
        {
          label: "Receiver",
          value: "Radiomaster XR4 Gemini ExpressLRS",
        },
        {
          label: "Propeller",
          value: "Gefman 8×10",
        },
        {
          label: "Li-ion battery",
          value: "8S3P 14,000 mAh",
        },
        {
          label: "Camera",
          value: "Caddx Ratel Pro V2 / Caddx 640",
        },
        { label: "Navigation system", value: "Sine.Link" },

        {
          label: "Video antenna",
          value: "5.8/6.2 GHz Clover circular polarization antenna",
        },
        {
          label: "Initiation board",
          value: "Inertial coded",
        },
      ],
    },
  },
  {
    slug: "vulcan-10-c",
    type: "interceptor",
    images: [
      "/images/catalog/vulcan-10-c/1.jpg",
      "/images/catalog/vulcan-10-c/2.jpg",
      "/images/catalog/vulcan-10-c/3.jpg",
    ],

    uk: {
      title: "БПЛА “VULCAN 10 Ц”",
      subtitle: "10-дюймовий FPV дрон-перехоплювач",

      features: [
        {
          label: "Максимальна дальність польоту",
          value: "30 км",
        },
        {
          label: "Навантаження бойової частини",
          value: "до 2 кг",
        },
        {
          label: "Час польоту",
          value: "до 35 хв",
        },
      ],

      equipment: [
        {
          label: "Рама",
          value: "10 inch Carbon",
        },
        {
          label: "Мотори",
          value: "3115 900 KV",
        },
        {
          label: "Політний стек",
          value: "F405 60A 6S",
        },
        {
          label: "Приймач",
          value: "Radiomaster Dual Band Xross Gemini ExpressLRS",
        },
        {
          label: "Пропелер",
          value: "1050 Gefman",
        },
        {
          label: "Акумулятор літій-іон",
          value: "6S4P 20 000 мА·год",
        },
        {
          label: "Камера",
          value: "Caddx Walksnail Ascent GT Pro 4W",
        },
        {
          label: "Антена відео",
          value: "5.8 GHz антена Clover Walksnail DJI (Конюшина) LHCP",
        },
        {
          label: "Плата ініціації",
          value: "Інерціальна кодифікована",
        },
      ],
    },

    en: {
      title: "UAV “VULCAN 10 C”",
      subtitle: "10-inch FPV interceptor drone",

      features: [
        {
          label: "Maximum flight range",
          value: "30 km",
        },
        {
          label: "Payload",
          value: "Up to 2 kg",
        },
        {
          label: "Flight time",
          value: "Up to 35 min",
        },
      ],

      equipment: [
        {
          label: "Frame",
          value: "10 inch Carbon",
        },
        {
          label: "Motors",
          value: "3115 900 KV",
        },
        {
          label: "Flight stack",
          value: "F405 60A 6S",
        },
        {
          label: "Receiver",
          value: "Radiomaster Dual Band Xross Gemini ExpressLRS",
        },
        {
          label: "Propeller",
          value: "1050 Gefman",
        },
        {
          label: "Li-ion battery",
          value: "6S4P 20,000 mAh",
        },
        {
          label: "Camera",
          value: "Caddx Walksnail Ascent GT Pro 4W",
        },
        {
          label: "Video antenna",
          value: "5.8 GHz Walksnail DJI Clover (LHCP) antenna",
        },
        {
          label: "Initiation board",
          value: "Inertial coded",
        },
      ],
    },
  },
];

export const filterCatalogList = (
  t: ReturnType<typeof useTranslations>
): DroneFilter[] => [
  { name: t("catalogFilterAll"), type: "all" },
  { name: t("catalogFilter1"), type: "fpv-opt" },
  // { name: t("catalogFilter2"), type: "fpv-cargo" },
  { name: t("catalogFilter3"), type: "fpv-radio" },
  { name: t("catalogFilter4"), type: "interceptor" },
];
