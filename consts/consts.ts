import type { ProductCatalog } from "@/types/types";

export const APP_NAME = "tkBetter.app";

export const PRODUCTS: ProductCatalog = {
  tkCapture: {
    name: "tkCapture",
    description: "모바일에서 더 나은 사진 경험을 제공하는 앱 시리즈",
    products: [
      {
        id: "tkcapturebook",
        name: "tkCaptureBook",
        description: "당신의 소중한 순간을 더 쉽게, 더 체계적으로 관리하세요",
        features: [
          "간편한 캡처 관리",
          "체계적인 정리",
          "빠른 검색",
          "모바일 최적화",
        ],
        status: "coming-soon",
        href: "/products/tkCapture/tkCaptureBook",
      },
    ],
  },
};
