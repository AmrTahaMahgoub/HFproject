export interface ApisTypes {
  BASE_URL?: string;
  buildingdata?:string;
  // login?: string;
  // signup?: string;
  // verifyAccount?: string;
  // forgotPassword?: string;
  // changeForgotPassword?: string;
  // getNotification?: string;
  // getCategories?: string;
  // getSubCategories?: string;
  // getFavoriteList?: string;
  // getAllAds?: string;
  // aboutUs?: string;
  // termsAndCondations?: string;
  // privacyPolicy?: string;
  // help?: string;
  // homeBanners?: string;
  // contactUs?: string;
  // favoriteAd?: string;
  // logout?: string;
  // changePassword?: string;
  // getMyAds?: string;
  // getCommentList?: string;
  // addComment?: string;
  // setViewAd?: string;
  // updateProfile?: string;
  // getProfile?: string;
  // addNewAds?: string;
  // editAds?: string;
  // deleteAds?: string;
  // solidAds?: string;
}

const Apis: ApisTypes = {
  BASE_URL: 'https://hfprojeplus.com',
  buildingdata:"/app/data_properties.php?lang=en&rooms&minbaths&minarea&appartments&extra",
  // login: '/accounts/user/login/',
  // signup: '/accounts/user/signup/',
  // verifyAccount: '/accounts/user/verify_otp/',
  // forgotPassword: '/accounts/user/forget_password/',
  // changeForgotPassword: '/accounts/user/set_password/',
  // getNotification: '/accounts/notification-list/',
  // getCategories: '/ads/main-category/',
  // getSubCategories: '/ads/sub-category/',
  // getFavoriteList: '/ads/favourite-ad-list/',
  // getAllAds: '/ads/ad/',
  // contactUs: '/configurations/contact-us/',
  // aboutUs: '/configurations/about-us/',
  // termsAndCondations: '/configurations/terms/',
  // privacyPolicy: '/configurations/policy/',
  // help: '/configurations/help/',
  // homeBanners: '/configurations/slid-ads/',
  // favoriteAd: '/ads/favourite-ad/',
  // logout: '/accounts/user/logout/',
  // changePassword: '/accounts/user/change_password/',
  // getMyAds: '/ads/my-ads/',
  // getCommentList: '/ads/comments',
  // addComment: '/ads/comments/',
  // setViewAd: '/ads/ad-detail/',
  // updateProfile: '/accounts/user/update_profile/',
  // getProfile: '/accounts/user/profile/',
  // addNewAds: '/ads/add-ad/',
  // editAds: '/ads/ad/',
  // deleteAds: '/ads/ad/',
  // solidAds: '/ads/ad-detail/',
};

export {Apis};
