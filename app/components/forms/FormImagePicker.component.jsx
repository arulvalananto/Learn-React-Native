import React from "react";
import { useFormikContext } from "formik";

import ImageInputList from "../ImageInputList.component";
import FormError from "./FormError.component";

const FormImagePicker = ({ name }) => {
  const { errors, setFieldValue, touched, values } = useFormikContext();

  const imageUris = values[name];

  const handleAdd = (uri) => {
    setFieldValue(name, [...imageUris, uri]);
  };

  const handleRemove = (uri) => {
    setFieldValue(
      name,
      imageUris.filter((imageUri) => imageUri !== uri)
    );
  };

  return (
    <>
      <ImageInputList
        imageUris={imageUris}
        onAddImage={handleAdd}
        onRemoveImage={handleRemove}
      />
      <FormError message={errors[name]} visible={touched[name]} />
    </>
  );
};

export default FormImagePicker;