import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";
import Landing from './components/Landing'
export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: "vtyvPD7xApq1pe2QSNQQPp",
      token: "DbWZvVMYSAtTLY7GdsPNtMsNT6edk6rkgLsrGSgpg03r4ycpaDYpwgV6unkpfF4DSMFwHIVMOoj0AeO1g",
    },
  ],

  // By default Plasmic will use the last published version of your project.
  // For development, you can set preview to true, which will use the unpublished
  // project, allowing you to see your designs without publishing.  Please
  // only use this for development, as this is significantly slower.
  preview: true,
});

// You can register any code components that you want to use here; see
// https://docs.plasmic.app/learn/code-components-ref/
// And configure your Plasmic project to use the host url pointing at
// the /plasmic-host page of your nextjs app (for example,
// http://localhost:3000/plasmic-host).  See
// https://docs.plasmic.app/learn/app-hosting/#set-a-plasmic-project-to-use-your-app-host

PLASMIC.registerComponent(Landing,{
  name:"Landing",
  props: {}
});
