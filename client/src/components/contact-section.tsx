import { useState } from "react";
import { Mail, Linkedin, MapPin, Send, Copy, Check, MessageCircle, GraduationCap, BookOpen } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertContactMessageSchema, type InsertContactMessage } from "@shared/schema";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const contactFormSchema = insertContactMessageSchema.extend({
  email: insertContactMessageSchema.shape.email.email("Please enter a valid email address"),
  name: insertContactMessageSchema.shape.name.min(2, "Name must be at least 2 characters"),
  message: insertContactMessageSchema.shape.message.min(10, "Message must be at least 10 characters"),
});

export function ContactSection() {
  const { toast } = useToast();
  const [copied, setCopied] = useState(false);

  const form = useForm<InsertContactMessage>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: InsertContactMessage) => {
      const response = await fetch("https://formspree.io/f/xdananvw", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });
      if (!response.ok) {
        throw new Error('Form submission failed');
      }
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      form.reset();
    },
    onError: () => {
      toast({
        title: "Failed to send message",
        description: "Please try again or contact me directly via email.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertContactMessage) => {
    contactMutation.mutate(data);
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText("amjwashi@gmail.com");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
      toast({
        title: "Email copied!",
        description: "Email address copied to clipboard.",
      });
    } catch {
      toast({
        title: "Failed to copy",
        description: "Please copy the email manually.",
        variant: "destructive",
      });
    }
  };

  return (
    <section id="contact" className="py-20 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Get in Touch
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-4" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Interested in collaboration, research opportunities, or just want to connect? 
            Feel free to reach out!
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-5">
            <Card className="overflow-visible h-full">
              <CardHeader>
                <CardTitle>Send a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Your name"
                              data-testid="input-contact-name"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input
                              type="email"
                              placeholder="your@email.com"
                              data-testid="input-contact-email"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Your message..."
                              rows={5}
                              className="resize-none"
                              data-testid="input-contact-message"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button 
                      type="submit" 
                      className="w-full mt-2"
                      disabled={contactMutation.isPending}
                      data-testid="button-send-message"
                    >
                      {contactMutation.isPending ? (
                        "Sending..."
                      ) : (
                        <>
                          <Send className="h-4 w-4 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
            <Card className="hover-elevate overflow-visible">
              <CardContent className="p-5">
                <div className="flex items-start gap-3">
                  <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground text-sm mb-1">Email</h3>
                    <p className="text-muted-foreground text-xs mb-2">amjwashi@gmail.com</p>
                    <Button
                      variant="outline"
                      size="sm"
                      className="h-8 text-xs w-full"
                      onClick={copyEmail}
                    >
                      {copied ? (
                        <><Check className="h-3 w-3 mr-1" /> Copied!</>
                      ) : (
                        <><Copy className="h-3 w-3 mr-1" /> Copy Email</>
                      )}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-elevate overflow-visible">
              <CardContent className="p-5">
                <div className="flex items-start gap-3">
                  <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Linkedin className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground text-sm mb-1">LinkedIn</h3>
                    <p className="text-muted-foreground text-xs mb-2">Professional network</p>
                    <Button
                      variant="outline"
                      size="sm"
                      className="h-8 text-xs w-full"
                      asChild
                    >
                      <a href="https://www.linkedin.com/in/muhaimenwashi/" target="_blank" rel="noopener noreferrer">
                        <Linkedin className="h-3 w-3 mr-1" /> View Profile
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-elevate overflow-visible">
              <CardContent className="p-5">
                <div className="flex items-start gap-3">
                  <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <GraduationCap className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground text-sm mb-1">Google Scholar</h3>
                    <p className="text-muted-foreground text-xs mb-2">Academic publications</p>
                    <Button
                      variant="outline"
                      size="sm"
                      className="h-8 text-xs w-full"
                      asChild
                    >
                      <a href="https://scholar.google.com/citations?user=24aF3TAAAAAJ&hl=en" target="_blank" rel="noopener noreferrer">
                        <GraduationCap className="h-3 w-3 mr-1" /> View Scholar
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-elevate overflow-visible">
              <CardContent className="p-5">
                <div className="flex items-start gap-3">
                  <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <BookOpen className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground text-sm mb-1">ResearchGate</h3>
                    <p className="text-muted-foreground text-xs mb-2">Research network</p>
                    <Button
                      variant="outline"
                      size="sm"
                      className="h-8 text-xs w-full"
                      asChild
                    >
                      <a href="https://www.researchgate.net/profile/Abdul-Muhaimen-Jamil-Washi" target="_blank" rel="noopener noreferrer">
                        <BookOpen className="h-3 w-3 mr-1" /> View Profile
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-elevate overflow-visible">
              <CardContent className="p-5">
                <div className="flex items-start gap-3">
                  <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <MessageCircle className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground text-sm mb-1">WhatsApp</h3>
                    <p className="text-muted-foreground text-xs mb-2">Direct message</p>
                    <Button
                      variant="outline"
                      size="sm"
                      className="h-8 text-xs w-full"
                      asChild
                    >
                      <a href="https://wa.me/8801735910849" target="_blank" rel="noopener noreferrer">
                        <MessageCircle className="h-3 w-3 mr-1" /> Message
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-elevate overflow-visible">
              <CardContent className="p-5">
                <div className="flex items-start gap-3">
                  <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground text-sm mb-1">Location</h3>
                    <p className="text-muted-foreground text-xs mt-1">
                      Rahman Nagar A Block<br />Chittagong-4203
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-sm text-muted-foreground">
            Thank You for Visiting My Portfolio Website!
          </p>
        </div>
      </div>
    </section>
  );
}