"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Button from "../Button/Button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "../ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "@/components/ui/use-toast";

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Link from "next/link";
import { formSubmission } from "@/lib/send-email";
import { useReCaptcha } from "next-recaptcha-v3";
import { NAV_ITEMS } from "@/config";
import { useRouter } from "next/navigation";

const HomePageForm = () => {
  const router = useRouter();
  const data = NAV_ITEMS.find((item) => item.value === "services");
  const services = data?.subItems && data?.subItems.map((item) => item.name);

  // Import 'executeRecaptcha' using 'useReCaptcha' hook
  const { executeRecaptcha } = useReCaptcha();

  const schema = z.object({
    gRecaptchaToken: z.string(),
    formId: z.string(),
    Name: z.string().min(1, { message: "Name is required" }),
    Email: z
      .string()
      .min(1, { message: "Email is required" })
      .email({ message: "Invalid email" }),
    Phone: z.string().min(5, { message: "Phone number is required" }),
    Interest: z
      .string()
      .min(1, { message: "Please select your interested service." }),
    Budget: z.string().optional(),
    Message: z.string().optional(),
    terms: z.boolean().refine((v) => v === true, {
      message: "Please accept the terms and conditions",
    }),
  });

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      gRecaptchaToken: "",
      formId: "Homepage Form",
      Name: "",
      Email: "",
      Phone: "",
      Interest: "",
      Budget: "",
      Message: "",
      terms: false,
    },
  });

  // const onSubmit = async (values: z.infer<typeof schema>) => {
  //   const token = await executeRecaptcha("homepage_form");
  //   if (token) {
  //     values.gRecaptchaToken = token;
  //     formSubmission(values);
  //     toast({
  //       variant: "default",
  //       description: "Your message has been sent successfully",
  //     });
  //     form.reset();
  //   }
  // };

  const onSubmit = async (values: z.infer<typeof schema>) => {
    const token = await executeRecaptcha("homepage_form");
    if (token) {
      values.gRecaptchaToken = token;
      form.reset();
      router.push("/thankyou");

      try {
        const response = await formSubmission(values);
        if (!response.sendMailSuccess) {
          router.back();
          toast({
            variant: "destructive",
            description: "Failed to send email",
          });
        }
      } catch (error) {
        router.back();
      }
    }
  };

  return (
    <div className="bg-white z-2 p-6 rounded-lg">
      <Form {...form}>
        <form className="space-y-5" onSubmit={form.handleSubmit(onSubmit)}>
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
          <div className="flex flex-col sm:flex-row justify-between gap-5">
            <FormField
              control={form.control}
              name="Name"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <Input
                      placeholder="Name"
                      {...field}
                      className="focus-visible:ring-offset-0 focus-visible:ring-0 border-b-2 border-t-0 border-l-0 border-r-0 border-solid rounded-none text-lg mb-4"
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
                <FormItem className="w-full">
                  <FormControl>
                    <Input
                      placeholder="Email"
                      {...field}
                      className="focus-visible:ring-offset-0 focus-visible:ring-0 border-b-2 border-t-0 border-l-0 border-r-0 border-solid rounded-none text-lg mb-4"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="flex flex-col sm:flex-row justify-between gap-5">
            <FormField
              control={form.control}
              name="Phone"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <PhoneInput
                      value={field.value}
                      country={"us"}
                      inputProps={{
                        name: "phone",
                      }}
                      inputStyle={{
                        width: "100%",
                        height: "2.5rem",
                        fontSize: "1.125rem",
                        borderTop: "0px",
                        borderLeft: "0px",
                        borderRight: "0px",
                        borderBottom: "2px solid #e5e5e5",
                        borderRadius: "0px",
                        color: "#000",
                      }}
                      containerStyle={{
                        marginBottom: "1rem",
                      }}
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
              name="Interest"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <SelectTrigger
                        className="focus:ring-offset-0 focus:ring-0 border-b-2 border-t-0 border-l-0 border-r-0 border-solid rounded-none text-lg"
                        aria-label="select any one service"
                      >
                        <SelectValue placeholder="Interest" />
                      </SelectTrigger>
                      <SelectContent>
                        {services?.map((service) => (
                          <SelectItem key={service} value={service}>
                            {service}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="Budget"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="relative">
                    <Input
                      placeholder="Budget"
                      {...field}
                      className="pl-7 focus-visible:ring-offset-0 focus-visible:ring-0 border-b-2 border-t-0 border-l-0 border-r-0 border-solid rounded-none text-lg mb-4"
                    />
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2">
                      $
                    </span>
                  </div>
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
                <FormLabel className="text-lg">Message</FormLabel>
                <FormControl>
                  <Textarea
                    {...field}
                    className="focus-visible:ring-offset-0 focus-visible:ring-0 text-lg mb-4"
                    rows={5}
                    // defaultValue={field.value}
                  />
                </FormControl>
                <FormDescription>
                  Please provide a brief description of your project
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="terms"
            render={({ field }) => (
              <FormItem className="flex flex-row items-center space-x-3 space-y-0 mb-4">
                <FormControl>
                  <Checkbox
                    defaultChecked={field.value}
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel className="text-lg">
                    I accept the{" "}
                    <Link
                      href="/terms-and-conditions"
                      className="text-blue-600 underline"
                    >
                      terms and conditions
                    </Link>
                  </FormLabel>
                  <FormMessage />
                </div>
              </FormItem>
            )}
          />
          <Button
            title="Send Your Enquiry"
            className="bg-white text-black mt-5"
            svgClassName="bg-[#F89520] group-hover/btn:right-[11rem]"
            type="submit"
          />
        </form>
      </Form>
    </div>
  );
};

export default HomePageForm;
