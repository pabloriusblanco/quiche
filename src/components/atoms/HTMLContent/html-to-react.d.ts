declare module "html-to-react" {
  import React from "react";

  export class Parser {
    constructor(options?: any);
    parse(html: string): React.ReactNode;
  }
}
