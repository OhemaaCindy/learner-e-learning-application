import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { InputField } from "./inputs";
import { useForm } from "react-hook-form";
import { zodResolver } from "./../../node_modules/@hookform/resolvers/zod/src/zod";
import { Link } from "react-router";

export function LoginForm({
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
      className={cn("flex flex-col gap-6 max-w-6xl mx-auto mt-7", className)}
      {...props}
    >
      <Card className="overflow-hidden p-0">
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
                <h1 className="text-2xl font-bold w-80">
                  Log in to continue your learning journey
                </h1>
              </div>
              <div className="grid gap-3">
                <div className=" rounded-lg">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    variant="secondary"
                    className=" cursor-pointer w-full p-4 border-1 border-[#01589A]"
                  >
                    {/* {isSubmitting ? "Logging in..." : "Log in using Google"} */}
                    <div className="flex items-center justify-center gap-2">
                      <img src="/Google.png" />
                      Log in using Google
                    </div>
                  </Button>
                </div>
                <div className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
                  <span className="bg-card text-muted-foreground relative z-10 px-2">
                    Or
                  </span>
                </div>
              </div>
              <form>
                <InputField
                  label="Email"
                  name="email"
                  type="email"
                  register={register}
                  error={errors.email?.message}
                  required
                />

                <InputField
                  label="Password"
                  name="email"
                  type="email"
                  register={register}
                  error={errors.email?.message}
                  required
                />
                <Link to="/request-password-reset">
                  <h1 className="text-[#01589A]">Forgot your password?</h1>
                </Link>

                <div className="pt-4">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="mb-4 cursor-pointer w-full p-4"
                  >
                    {isSubmitting ? "Logging in..." : "Log in"}
                  </Button>
                </div>
              </form>

              <div className="text-center text-md">
                Need to create an account ?
                <a
                  href="/register"
                  className="underline underline-offset-4 text-[#01589A] font-semibold"
                >
                  Sign up
                </a>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
