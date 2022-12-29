export const buttonStyles = {
  components: {
    Button: {
      baseStyle: {
        fontWeight: "bold",
        borderRadius: "10px",
        _focus: {
          boxShadow: "none",
        },
      },
      variants: {
        smallButton: (props) => ({
          fontWeight: "bold",
          borderRadius: "10px",
          _focus: {
            boxShadow: "none",
          },
          bg: props.colorMode === "light" ? "gray.200" : "gray.700",
          _hover: { bg: props.colorMode === "light" ? "gray.300" : "gray.600" },
          _active: {
            bg: props.colorMode === "light" ? "gray.400" : "gray.500",
          },
        }),
      },
    },
  },
};
