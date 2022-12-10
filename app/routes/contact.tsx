import { ActionFunction, json, MetaFunction, redirect } from "@remix-run/node";
import { Form, useActionData } from "@remix-run/react";
import { useState } from "react";
import CircleArrow from "~/components/CircleArrow";
import styles from "~/styles";
import { z } from "zod";
import FieldError from "~/components/FieldError";

export const meta: MetaFunction = () => {
  return {
    charset: "utf-8",
    title: "Contact",
    description:
      "This is the contact page of Bogdan Filimon's personal website",
    keywords: "Contact, Filimon, Bogdan",
  };
};

// This type infer errors from a ZodType, as produced by `flatten()` of a parsed schema.
type inferSafeParseErrors<T extends z.ZodType<any, any, any>, U = string> = {
  formErrors: U[];
  fieldErrors: {
    [P in keyof z.infer<T>]?: U[];
  };
};

const ContactFields = z.object({
  name: z.string().min(3).max(100).trim(),
  email: z.string().email().max(320).trim(),
  message: z.string().min(10).max(1000).trim(),
});

type ContactFields = z.infer<typeof ContactFields>;
type ContactFieldsErrors = inferSafeParseErrors<typeof ContactFields>;

type ActionData = {
  formError?: string;
  errors?: ContactFieldsErrors;
  fields?: ContactFields;
};

const badRequest = (data: ActionData) => json(data, { status: 400 });

export const action: ActionFunction = async ({ request, context }) => {
  const form = await request.formData();
  const fields = Object.fromEntries(form.entries()) as ContactFields;

  const result = ContactFields.safeParse(fields);

  if (!result.success) {
    return badRequest({
      fields,
      errors: result.error.flatten(),
    });
  }

  if (!process.env.FORMSPREE_SERVICE_URL) {
    throw new Error("FORMSPREE_SERVICE_URL is not defined in .env file");
  }

  const response = await fetch(process.env.FORMSPREE_SERVICE_URL, {
    method: "POST",
    body: JSON.stringify({
      name: fields.name,
      _replyto: fields.email,
      message: fields.message,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    return badRequest({
      fields,
      formError: "Something went wrong... Please try again later",
    });
  }

  return redirect("/");
};

export default function Contact() {
  const data = useActionData<ActionData>();
  const [runAnimation, setRunAnimation] = useState(false);

  return (
    <div className="flex flex-col items-center w-full">
      <Form method="post" className="w-full max-w-2xl">
        <h1>Contact</h1>
        <div className="my-8">
          <input
            placeholder="Name"
            id="name"
            name="name"
            defaultValue={data?.fields?.name}
            className={styles.input}
          />
          <FieldError errorsText={data?.errors?.fieldErrors.name} />
        </div>
        <div className="my-8">
          <input
            placeholder="Email"
            id="email"
            name="email"
            defaultValue={data?.fields?.email}
            className={styles.input}
          />
          <FieldError errorsText={data?.errors?.fieldErrors.email} />
        </div>
        <div className="my-8">
          <textarea
            placeholder="Message"
            id="message"
            name="message"
            defaultValue={data?.fields?.message}
            className={`${styles.input} h-60 resize-none`}
          />
          <FieldError errorsText={data?.errors?.fieldErrors.message} />
        </div>
        <FieldError
          errorsText={data?.formError ? [data.formError] : undefined}
        />
        <button
          type="submit"
          className={`${styles.submitButton} group flex gap-4`}
          onMouseEnter={() => setRunAnimation(true)}
        >
          <h2>Send Message</h2> <CircleArrow runAnimation={runAnimation} />
        </button>
      </Form>
    </div>
  );
}
