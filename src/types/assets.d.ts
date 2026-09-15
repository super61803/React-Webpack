/// <reference types="react" />
/// <reference types="react-dom" />

declare module "*.module.scss" {
  const classes: { readonly [key: string]: string };
  export default classes;
}

declare module "*.module.css" {
  const classes: { readonly [key: string]: string };
  export default classes;
}

declare module "*.css";
declare module "*.scss";
declare module "*.sass";
declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.gif";
declare module "*.svg";
declare module "*.ico";
declare module "*.woff";
declare module "*.woff2";
declare module "*.eot";
declare module "*.ttf";
declare module "*.otf";
