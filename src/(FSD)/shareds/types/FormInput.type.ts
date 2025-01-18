import { InputProps } from "@heroui/input";
import { FormType } from "./Form.type";

export interface FormInputType extends Omit<InputProps, "name">, FormType {
    
}