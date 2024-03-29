import withPlugins from "next-compose-plugins";
import withLess from "next-with-less";

const plugins = [
  /* ...other plugins... */
  [
    withLess,
    {
      lessLoaderOptions: {
        /* ... */
      },
    },
  ],
  /* ...other plugins... */
];

export default withLess({
  lessLoaderOptions: {
    /* ... */
    lessOptions: {
      /* ... */
      modifyVars: {
        /* ... */
      },
    },
  },
});
