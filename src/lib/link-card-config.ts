import data from './link-card-config.json';

type Link = {
  label: string;
  url: string;
  icon: string;
};

type UserConfig = {
  name: string;
  title: string;
  avatarFallback: string;
  gravatarEmail: string;
  links: Link[];
};

export const userConfig: UserConfig = data.userConfig;
