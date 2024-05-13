"use client";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../ui/button";
import { Icons } from "../Icons/Icons";
import { formSubmission } from "@/lib/send-email";
import { useReCaptcha } from "next-recaptcha-v3";
import { toast } from "../ui/use-toast";
type Inputs = {
  gRecaptchaToken: string;
  formId: string;
  Email: string;
};
const NewsLetter = () => {
  // Import 'executeRecaptcha' using 'useReCaptcha' hook
  const { executeRecaptcha } = useReCaptcha();

  const schema = z.object({
    gRecaptchaToken: z.string(),
    formId: z.string(),
    Email: z.string().min(5, { message: "Email is required" }).email(),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(schema),
    defaultValues: {
      gRecaptchaToken: "",
      formId: "Newsletter Form",
      Email: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof schema>) => {
    const token = await executeRecaptcha("newsletter_form");
    if (token) {
      values.gRecaptchaToken = token;
      formSubmission(values);
      toast({
        title: "Subscribed! 🎉",
        description: "Thank you for subscribing to our newsletter!",
      });
      reset();
    }
  };

  return (
    <form className="mt-6 relative" action="" onSubmit={handleSubmit(onSubmit)}>
      <input type="hidden" {...register("formId")} />
      <input
        type="email"
        placeholder="Enter your email"
        {...register("Email")}
        className="w-full md:w-full p-2 rounded-md relative h-12 outline-none text-black"
      />

      {errors.Email && (
        <p className="text-red-600 pt-4">{errors.Email.message}</p>
      )}

      <Button
        type="submit"
        className="absolute inset-y-1 right-2 bg-[#FB9100] rounded-tl-none rounded-br-none "
        aria-label="Subscribe to our newsletter"
      >
        <Icons.ArrowRightBroken className="text-xl" />
      </Button>
    </form>
  );
};

export default NewsLetter;
