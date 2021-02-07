import { createstore } from "redux";
import { Reducer } from "./reducer";



const MyStore = createstore(Reducer);

export default MyStore;