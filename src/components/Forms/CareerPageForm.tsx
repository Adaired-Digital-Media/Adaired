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

const CareerPageForm = () => {
  const schema = z.object({
    formId: z.string(),
    Name: z.string().min(1, { message: "Name is required" }),
    Email: z
      .string()
      .min(1, { message: "Email is required" })
      .email({ message: "Invalid email" }),
    Phone: z.string().min(5, { message: "Phone number is required" }),
    CurrentDesignation: z
      .string()
      .min(1, { message: "Current Designation is required" }),
    Resume: z.any(),
    Message: z.string().optional(),
  });

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      formId: "careerpageForm",
      Name: "",
      Email: "",
      Phone: "",
      CurrentDesignation: "",
      Resume: "",
      Message: "",
    },
  });

  function onSubmit(values: z.infer<typeof schema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(values, null, 2)}</code>
        </pre>
      ),
    });
    // console.log(values);
    form.reset();
  }

  return (
    <div>
      <Form {...form}>
        <form
          className="border p-5 lg:p-10 rounded-lg "
          onSubmit={form.handleSubmit(onSubmit)}
        >
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
            name="Phone"
            render={({ field }) => (
              <FormItem className="w-full mb-5">
                <FormControl>
                  <PhoneInput
                    // country={"us"}
                    value={field.value}
                    onChange={(e) => field.onChange(e)}
                    inputProps={{
                      name: "Phone",
                    }}
                    inputStyle={{
                      width: "100%",
                      height: "3.5rem",
                      fontSize: "1.125rem",
                      borderRadius: "0.5rem",
                      color: "#000",
                      border: "none",
                      backgroundColor: "#fafafa",
                    }}
                    placeholder="Phone No."
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="CurrentDesignation"
            render={({ field }) => (
              <FormItem className="w-full mb-5">
                <FormControl>
                  <Input
                    type="text"
                    placeholder="Current Designation"
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
            name="Resume"
            render={({ field }) => (
              <FormItem className="w-full mb-5">
                <FormControl>
                  <Input
                    type="file"
                    accept="application/pdf"
                    placeholder="Resume"
                    onChange={(e) => {
                      const files = e.target.files;
                      if (files && files.length > 0) {
                        field.onChange(files[0]);
                      }
                    }}
                    className="focus-visible:ring-offset-0 focus-visible:ring-0 rounded-lg text-lg mb-4 items-center bg-[#fafafa] border-none"
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
            title="Submit"
            className="bg-white text-black mt-10 w-full flex items-center justify-center pl-0 pr-0 hover:pl-0 hover:pr-0"
            svgClassName="bg-[#F89520]  group-hover/btn:right-2"
            type="submit"
          />
        </form>
      </Form>
    </div>
  );
};

export default CareerPageForm;
