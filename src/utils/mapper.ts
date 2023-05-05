export const bannerMapper = (banners: any) => {
  return banners.map((banner: any) => ({
    img: `${process.env.NEXT_PUBLIC_API_URL}${banner.attributes.img.data.attributes.url}`,
    title: banner.attributes.title,
    subtitle: banner.attributes.subtitle
  }));
};

export const newsInstagramMapper = (newsInstagram: any) => {
  return newsInstagram.map((instagram: any) => ({
    title: instagram.attributes.title,
    img: `${process.env.NEXT_PUBLIC_API_URL}${instagram.attributes.img.data.attributes.url}`,
    description: instagram.attributes.description,
    href: instagram.attributes.href
  }));
};

export const newsGeogisMapper = (newsGeogis: any) => {
  return newsGeogis.map((geogis: any) => ({
    title: geogis.attributes.title,
    img: `${process.env.NEXT_PUBLIC_API_URL}${geogis.attributes.img.data.attributes.url}`,
    description: geogis.attributes.description
  }));
};
