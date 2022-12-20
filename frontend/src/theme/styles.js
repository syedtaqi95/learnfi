import { mode } from "@chakra-ui/theme-tools";

export const globalStyles = {
  styles: {
    global: (props) => ({
      body: {
        bg: mode("gray.50", "gray.800")(props),
        fontFamily: "'Inter', sans-serif",
      },
      html: {
        fontFamily: "'Inter', sans-serif",
      },
    }),
  },
};
