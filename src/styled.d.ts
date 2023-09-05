import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      success: string;
    };
    zIndex: {
      background: number;
      land: number;
      player: number;
      foreground: number;
      ui: number;
      controls: number;
    };
  }
}
