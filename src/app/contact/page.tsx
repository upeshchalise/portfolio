import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { AtSign, Mail, MessageSquare } from "lucide-react";

const Contact = () => {
  return (
    <>
      <div className="pl-3">
        <div>
          <span className="text-blue-500">const</span>{" "}
          <span className="text-purple-500">ContactForm </span>
          <span className="text-muted-foreground"> = </span>
          <span className="text-blue-500">()</span>
          <span className="text-blue-500"> {"=>"} </span>
          <span className="text-muted-foreground"> {"{"}</span>
        </div>
        <form action="" method="post" className="flex flex-col gap-5 md:max-w-screen-md">
          <div className="flex justify-center flex-wrap gap-4">
            <div className="flex-1 flex flex-col gap-2">
              <label
                htmlFor="name"
                className="flex gap-1 items-center text-muted-foreground"
              >
                <AtSign size={16} />
                Name
              </label>
              <Input
                name="name"
                type="text"
                placeholder="Your name here..."
                className=" bg-[#24262B] border-[#24262B] focus:border-white "
                required
              />
            </div>
            <div className="flex-1 flex flex-col gap-2">
              <label
                htmlFor="email"
                className="flex gap-1 items-center text-muted-foreground"
              >
                <Mail size={16} /> Email
              </label>
              <Input
                name="email"
                type="email"
                placeholder="Your email here..."
                className=" bg-[#24262B] border-[#24262B] focus:border-white "
                required
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="message"
              className="flex gap-1 items-center text-muted-foreground"
            >
              <MessageSquare size={16} /> Message
            </label>
            <Textarea
              className="bg-[#24262B] border-[#24262B] focus:border-white"
              name="message"
              required
              placeholder="Your message here..."
              rows={5}
            />
          </div>
          <Button className="bg-white text-black hover:bg-slate-100">Send message</Button>
        </form>
      </div>
    </>
  );
};

export default Contact;
