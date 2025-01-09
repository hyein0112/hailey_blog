declare module "remove-markdown-and-html" {
  function removeMd(
    markdown: string,
    options?: {
      stripListLeaders?: boolean;
      listUnicodeChar?: string;
      gfm?: boolean;
      useImgAltText?: boolean;
    },
  ): string;

  export = removeMd;
}
