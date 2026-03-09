import { useCallback, useEffect, useState } from "react";
import { Input } from "./input";
import { Card, CardHeader, CardTitle } from "./ui/card";
import {
  Field,
  FieldGroup,
  FieldSet,
} from "./ui/field";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Button } from "./Button";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Label } from "./ui/label";
import useDebounce from "@/hooks/useDebounce";

type FormValuesType = {
  firstName: string;
  lastName: string;
  email: string;
  mobileNumber: string;
  selectedFruit: string;
  radioButton: string | null;
};

const emptyValues: FormValuesType = {
  firstName: "",
  lastName: "",
  email: "",
  mobileNumber: "",
  selectedFruit: "",
  radioButton: null,
};

export function Form() {
  const [values, setValues] = useState<FormValuesType>(emptyValues);
  const [startEmail, setStartEmail] = useState("");
  const [showForm, setShowForm] = useState(false);

  const onInputChange = useCallback(
    (key: keyof FormValuesType, value: string) => {
      setValues((prev) => ({
        ...prev,
        [key]: value,
      }));
    },
    []
  );

  const onSubmit = () => {
    const { firstName, email } = values;
    localStorage.setItem(email, JSON.stringify(values));
    window.alert(`Hello ${firstName}; email address ${email}`);
  };

  const onCreateNew = useCallback(() => {
    if (!startEmail.trim()) {
      window.alert("Email is required");
      return;
    }

    setValues({
      ...emptyValues,
      email: startEmail.trim(),
    });
    setShowForm(true);
  }, [startEmail]);

  const onLoad = useCallback(() => {
    if (!startEmail.trim()) {
      window.alert("Email is required");
      return;
    }

    const localStorageValue = localStorage.getItem(startEmail.trim());

    if (localStorageValue) {
      const parsedLocalStorageValue: FormValuesType = JSON.parse(localStorageValue);

      setValues({
        ...parsedLocalStorageValue,
        email: startEmail.trim(),
      });
      setShowForm(true);
    } else {
      window.alert("Email not found");
    }
  }, [startEmail]);

  const debouncedValues = useDebounce(values, 1000);

  useEffect(() => {
    if (!showForm) return;
    if (!debouncedValues.email) return;

    localStorage.setItem(debouncedValues.email, JSON.stringify(debouncedValues));
  }, [debouncedValues, showForm]);

  if (!showForm) {
    return (
      <div>
        <Card className="my-4">
          <CardHeader>
            <div className="flex items-center gap-2">
              <div className="grow border h-0"></div>
              <CardTitle>Start here</CardTitle>
              <div className="grow border h-0"></div>
            </div>
          </CardHeader>

          <div className="w-full p-6">
            <FieldSet>
              <FieldGroup>
                <Field>
                  <Input
                    className="bg-white"
                    id="start-email"
                    autoComplete="off"
                    type="email"
                    value={startEmail}
                    onChange={(e) => setStartEmail(e.target.value)}
                    placeholder="asdf@ntv.is"
                  />
                </Field>
              </FieldGroup>
            </FieldSet>

            <div className="flex flex-col py-4 gap-4">
              <Button
                value="load"
                type="button"
                onClick={onLoad}
                className="bg-green-500 p-4 rounded text-white uppercase"
              />
              <Button
                value="create new"
                type="button"
                onClick={onCreateNew}
                className="bg-blue-500 p-4 rounded text-white uppercase"
              />
            </div>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div>
      <Card className="w-3/4 max-w-7xl bg-blue-950">
        <CardHeader>
          <div className="flex items-center gap-2">
            <div className="grow border h-0"></div>
            <CardTitle className="text-white">Example</CardTitle>
            <div className="grow border h-0"></div>
          </div>
        </CardHeader>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            onSubmit();
          }}
          className="w-full"
        >
          <FieldSet>
            <FieldGroup>
              <Field>
                <p className="text-white">
                  Search term: {debouncedValues.firstName}
                </p>
                <Input
                  className="bg-white"
                  id="firstName"
                  autoComplete="off"
                  placeholder="Gunnsteinn"
                  value={values.firstName}
                  onChange={(e) => {
                    onInputChange("firstName", e.target.value);
                  }}
                />
              </Field>

              <Field>
                <Input
                  className="bg-white"
                  id="lastName"
                  autoComplete="off"
                  placeholder="Skulason"
                  value={values.lastName}
                  onChange={(e) => {
                    onInputChange("lastName", e.target.value);
                  }}
                />
              </Field>

              <Field>
                <Input
                  className="bg-white"
                  id="email"
                  disabled
                  autoComplete="off"
                  type="email"
                  placeholder="asdf@ntv.is"
                  value={values.email}
                  onChange={(e) => {
                    onInputChange("email", e.target.value);
                  }}
                />
              </Field>

              <Field>
                <Input
                  className="bg-white"
                  id="mobileNumber"
                  autoComplete="off"
                  type="number"
                  placeholder="Mobile number"
                  value={values.mobileNumber}
                  onChange={(e) => {
                    onInputChange("mobileNumber", e.target.value);
                  }}
                />
              </Field>
            </FieldGroup>

            <FieldGroup>
              <Select
                value={values.selectedFruit}
                onValueChange={(value) => {
                  onInputChange("selectedFruit", value);
                }}
              >
                <SelectTrigger className="w-full bg-white">
                  <SelectValue placeholder="Select a fruit" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Fruits</SelectLabel>
                    <SelectItem value="apple">Apple</SelectItem>
                    <SelectItem value="banana">Banana</SelectItem>
                    <SelectItem value="blueberry">Blueberry</SelectItem>
                    <SelectItem value="grapes">Grapes</SelectItem>
                    <SelectItem value="pineapple">Pineapple</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </FieldGroup>

            <FieldGroup>
              <RadioGroup
                value={values.radioButton ?? ""}
                className="w-fit flex"
                onValueChange={(value) => {
                  onInputChange("radioButton", value);
                }}
              >
                <RadioGroupItem className="bg-white" value="yes" id="yes" />
                <Label className="text-white" htmlFor="yes">
                  Yes
                </Label>

                <RadioGroupItem className="bg-white" value="no" id="no" />
                <Label className="text-white" htmlFor="no">
                  No
                </Label>
              </RadioGroup>
            </FieldGroup>
          </FieldSet>

          <div className="flex flex-col py-4 gap-4">
            <Button
              type="submit"
              className="bg-pink-500 p-4 rounded text-white uppercase"
            />
            <div className="flex items-center gap-2">
              <div className="grow border h-0"></div>
              <CardTitle className="text-white">or</CardTitle>
              <div className="grow border h-0"></div>
            </div>
            <Button
              value="edit"
              type="submit"
              className="bg-black p-4 rounded text-white uppercase border-pink-500 border"
            />
          </div>
        </form>
      </Card>
    </div>
  );
}