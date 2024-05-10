"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Button from "../Button/Button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "../ui/textarea";
import { toast } from "@/components/ui/use-toast";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { contactPageFormSubmission } from "@/lib/send-email";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import GoogleCaptchaWrapper from "../GoogleCaptchaWrapper";
const ContactPageForm = () => {
  const { executeRecaptcha } = useGoogleReCaptcha();
  const schema = z.object({
    formId: z.string(),
    Name: z.string().min(1, { message: "Name is required" }),
    Email: z
      .string()
      .min(1, { message: "Email is required" })
      .email({ message: "Invalid email" }),
    Phone: z.string().min(5, { message: "Phone number is required" }),
    Message: z.string().optional(),
  });

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      formId: "contactpageForm",
      Name: "",
      Email: "",
      Phone: "",
      Message: "",
    },
  });

  function onSubmit(values: z.infer<typeof schema>) {
    if (!executeRecaptcha) {
      console.log("Execute recaptcha not available yet");
      return;
    }
    contactPageFormSubmission(values);
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(values, null, 2)}</code>
        </pre>
      ),
    });
    form.reset();
  }
  return (
    <div>
      <Form {...form}>
        <form
          className="border p-10 rounded-lg max-w-3xl mx-auto"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <FormField
            control={form.control}
            name="formId"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input type="hidden" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="Name"
            render={({ field }) => (
              <FormItem className="w-full mb-5">
                <FormLabel className="text-lg">Name</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    className="focus-visible:ring-offset-0 focus-visible:ring-0 rounded-lg text-lg mb-4"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="Email"
            render={({ field }) => (
              <FormItem className="w-full mb-5">
                <FormLabel className="text-lg">Email</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    className="focus-visible:ring-offset-0 focus-visible:ring-0 rounded-lg text-lg mb-4"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="Phone"
            render={({ field }) => (
              <FormItem className="w-full mb-5">
                <FormLabel className="text-lg">Phone No.</FormLabel>
                <FormControl>
                  <PhoneInput
                    value={field.value}
                    country={"us"}
                    inputProps={{
                      name: "phone",
                    }}
                    inputStyle={{
                      width: "100%",
                      height: "3.5rem",
                      fontSize: "1.125rem",
                      borderRadius: "0.5rem",
                      color: "#000",
                    }}
                    containerStyle={{}}
                    enableSearch
                    onChange={(phone) => {
                      field.onChange(phone);
                    }}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="Message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-lg mb-10">Message</FormLabel>
                <FormControl>
                  <Textarea
                    {...field}
                    className="focus-visible:ring-offset-0 focus-visible:ring-0 text-lg mb-4"
                    rows={5}
                    // defaultValue={field.value}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            title="Send Your Enquiry"
            className="bg-white text-black mt-10 w-full flex items-center justify-center pl-0 pr-0 hover:pl-0 hover:pr-0"
            svgClassName="bg-[#F89520]  group-hover/btn:right-2"
            type="submit"
          />
        </form>
      </Form>
    </div>
  );
};

export default ContactPageForm;
