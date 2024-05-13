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
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "../ui/textarea";
import { toast } from "@/components/ui/use-toast";
import { formSubmission } from "@/lib/send-email";
import { useReCaptcha } from "next-recaptcha-v3";

function GetInTouchForm() {
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
    Message: z.string().optional(),
  });

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      gRecaptchaToken: "",
      formId: "Get in Touch Form",
      Name: "",
      Email: "",
      Message: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof schema>) => {
    const token = await executeRecaptcha("get_in_touch_form");
    if (token) {
      values.gRecaptchaToken = token;
      formSubmission(values);
      toast({
        variant: "default",
        description: "Your message has been sent successfully",
      });
      form.reset();
    }
  };

  return (
    <div className="border p-5 rounded-lg">
      <h2 className="text-[1.688rem] md:text-4xl mb-4 inline-block">
        Get In Touch
        <div className="h-0.5 w-3/4 bg-[#BC1D8D]" />
      </h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
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
                <FormControl>
                  <Input
                    type="text"
                    placeholder="Name"
                    {...field}
                    className="focus-visible:ring-offset-0 focus-visible:ring-0 rounded-lg text-lg mb-4 bg-[#fafafa] border-none"
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
                <FormControl>
                  <Input
                    type="email"
                    placeholder="Email"
                    {...field}
                    className="focus-visible:ring-offset-0 focus-visible:ring-0 rounded-lg text-lg mb-4 bg-[#fafafa] border-none"
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
              <FormItem className="w-full mb-5">
                <FormControl>
                  <Textarea
                    placeholder="Message"
                    rows={5}
                    {...field}
                    className="focus-visible:ring-offset-0 focus-visible:ring-0 rounded-lg text-lg mb-4 bg-[#fafafa] border-none"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            title="Send Your Enquiry"
            className="bg-white text-black "
            svgClassName="bg-[#F89520] group-hover/btn:right-[11rem]"
            type="submit"
          />
        </form>
      </Form>
    </div>
  );
}

export default GetInTouchForm;
