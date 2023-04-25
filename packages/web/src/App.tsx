import { defineComponent } from "vue";
import HelloWorld from "./components/HelloWorld";
import { getImage } from "./plugins/ImageAutoLoader/ImageCollector";

export default defineComponent({
  setup() {
    return () => {
      return (
        <>
          <h1>hello anchor</h1>
          <HelloWorld />
          <img
            style={{ width: "10rem", height: "10rem", borderRadius: "50%" }}
            src={getImage("pokemon")}
            alt=""
          />
        </>
      );
    };
  },
});
