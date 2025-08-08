import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { InputField } from "./inputs";
import { useForm } from "react-hook-form";
import { zodResolver } from "./../../node_modules/@hookform/resolvers/zod/src/zod";

export function OtpVerificationForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const {
    register,
    // handleSubmit,
    formState: { errors, isSubmitting },
    // reset,
  } = useForm({
    resolver: zodResolver,
  });

  return (
    <div
      className={cn(
        "flex flex-col gap-6 max-w-6xl mx-auto mt-20 mb-7",
        className
      )}
      {...props}
    >
      <Card className="overflow-hidden p-0 shadow-none border-none">
        <CardContent className="grid p-0 md:grid-cols-2">
          <div className="flex justify-center items-center">
            <img
              src="/Ellipse.png"
              alt="Image"
              className="h-90 w-90 object-cover hidden md:block"
            />
          </div>

          <form className="p-6 md:p-8">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col items-center text-center">
                <h1 className="text-2xl font-bold w-80 mb-6">
                  OTP Verification
                </h1>
                <p> Verify your accounts using the six digit sent to</p>
              </div>

              <form>
                <InputField
                  // label="First Name"
                  placeholder="123456"
                  name="email"
                  type="email"
                  register={register}
                  error={errors.email?.message}
                  // required
                />

                <div className="pt-4">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="mb-4 cursor-pointer w-full p-4"
                  >
                    {isSubmitting ? "Verying..." : "Register"}
                  </Button>
                </div>
              </form>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
