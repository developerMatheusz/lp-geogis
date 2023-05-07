export const bannerMapper = (banners: any) => {
  return banners.map((banner: any) => ({
    img: banner.attributes.img.data.attributes.url,
    title: banner.attributes.title,
    subtitle: banner.attributes.subtitle
  }));
};

export const newsInstagramMapper = (newsInstagram: any) => {
  return newsInstagram.map((instagram: any) => ({
    title: instagram.attributes.title,
    img: instagram.attributes.img.data.attributes.url,
    description: instagram.attributes.description,
    href: instagram.attributes.href
  }));
};

export const newsGeogisMapper = (newsGeogis: any) => {
  return newsGeogis.map((geogis: any) => ({
    title: geogis.attributes.title,
    img: geogis.attributes.img.data.attributes.url,
    description: geogis.attributes.description
  }));
};
