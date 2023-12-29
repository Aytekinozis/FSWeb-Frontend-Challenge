import React, { useState } from "react";
import { Form, FormGroup, Input, Label } from "reactstrap";

const Header = () => {
  const [dark, setDark] = useState(false);
  return (
    <div className="flex justify-around bg-my-purple min-h-24">
      <div className="bg-my-green absolute top-0 right-0 min-h-24 w-3/12 flex"></div>
      <div className="">
        <h2 className="text-my-green text-4xl text-left mt-5">almilla</h2>
      </div>
      <div className="sticky flex items-baseline mt-3">
        <button className="mr-8 text-my-green font-bold align-top">
          Turkceye Gec
        </button>
        <Form>
          <FormGroup switch>
            <Input
              type="switch"
              role="switch"
              checked={dark}
              onClick={() => setDark(!dark)}
            />
            <Label className="text-my-purple font-bold">Dark Mode</Label>
          </FormGroup>
        </Form>
      </div>
    </div>
  );
};

export default Header;
