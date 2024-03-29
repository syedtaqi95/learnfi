// custom style used from Purity UI Dashboard
// See https://demos.creative-tim.com/docs-purity-ui-dashboard/

import { extendTheme } from "@chakra-ui/react";
import { globalStyles } from "./styles";
import { breakpoints } from "./foundations/breakpoints";
import { textStyles } from "./foundations/text";
import { buttonStyles } from "./components/button";
import { badgeStyles } from "./components/badge";
import { linkStyles } from "./components/link";
import { drawerStyles } from "./components/drawer";

export default extendTheme(
  { breakpoints }, // Breakpoints
  textStyles, // text styles
  globalStyles,
  buttonStyles, // Button styles
  badgeStyles, // Badge styles
  linkStyles, // Link styles
  drawerStyles // Sidebar variant for Chakra's drawer
);
