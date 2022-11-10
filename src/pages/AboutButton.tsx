import { Button } from "sl-vue-template";
import { defineComponent } from "vue";

export default defineComponent({
  setup(props, { slots, attrs, emit }) {
    const onClick = () => {
      console.log("--->", 1);
    };

    return () => {
      return (
        <Button mode="primary" onClick={onClick}>
          <div>test</div>
        </Button>
      );
    };
  },
});
