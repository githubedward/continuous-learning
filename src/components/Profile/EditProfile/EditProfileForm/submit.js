import * as helper from "../../../../helpers/functions";
import axios from "axios";

export default async function submit(values) {
  await helper.delay(1000);
  alert(`submitted:\n\n${JSON.stringify(values)}`);
}
