import { useMemo, useState } from "react";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { buildMessageWithPhone, useContactFormSubmit } from "@/hooks/useContactFormSubmit";
import { Calendar, User, Mail, Phone, GraduationCap, ArrowRight } from "lucide-react";

type BookSessionDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title?: string;
  description?: string;
};

export function BookSessionDialog({
  open,
  onOpenChange,
  title = "Book a session",
  description = "Select your target exam and fill in your details to book a consultation with Aman.",
}: BookSessionDialogProps) {
  const initialState = useMemo(
    () => ({ name: "", email: "", phone: "", exam: "" }),
    [],
  );
  const [formData, setFormData] = useState(initialState);

  const { isSubmitting, submit } = useContactFormSubmit({
    formSource: "Book a session",
    successMessage: "Thanks! Your session request is submitted. We'll contact you soon.",
  });

  const canSubmit =
    formData.name.trim().length > 0 &&
    formData.email.trim().length > 0 &&
    formData.phone.trim().length > 0 &&
    formData.exam !== "" &&
    !isSubmitting;

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!canSubmit) return;

    const ok = await submit(
      {
        name: formData.name,
        email: formData.email,
        message: buildMessageWithPhone(`Target Exam: ${formData.exam}`, formData.phone) || "Book a session request",
      },
      () => {
        setFormData(initialState);
        onOpenChange(false);
      },
    );

    if (!ok) return;
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[480px] rounded-3xl border border-slate-200 bg-white text-slate-900 shadow-2xl p-6 sm:p-7">
        <DialogHeader className="text-left">
          <div className="flex flex-col items-start pb-1">
            <div className="w-11 h-11 rounded-2xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 mb-3 shadow-sm">
              <Calendar className="w-5 h-5" />
            </div>
            <DialogTitle className="text-2xl font-extrabold tracking-tight text-slate-950 font-display">
              {title}
            </DialogTitle>
            <DialogDescription className="text-slate-600 mt-1 text-sm leading-relaxed font-medium">
              {description}
            </DialogDescription>
          </div>
        </DialogHeader>

        <form onSubmit={onSubmit} className="space-y-4 pt-1">
          <div className="grid gap-3.5 grid-cols-1">
            <div className="space-y-1">
              <Label htmlFor="book-session-name" className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-blue-600" />
                Name
              </Label>
              <Input
                id="book-session-name"
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={(e) => setFormData((p) => ({ ...p, name: e.target.value }))}
                required
                className="h-11 px-4 bg-white border border-slate-200 text-slate-900 focus-visible:ring-2 focus-visible:ring-blue-500/30 focus-visible:border-blue-500 transition-all rounded-xl placeholder:text-slate-400 font-semibold text-sm shadow-sm"
              />
            </div>

            <div className="space-y-1">
              <Label htmlFor="book-session-phone" className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-indigo-600" />
                Phone
              </Label>
              <Input
                id="book-session-phone"
                name="phone"
                type="tel"
                placeholder="+91 XXXXX XXXXX"
                value={formData.phone}
                onChange={(e) => setFormData((p) => ({ ...p, phone: e.target.value }))}
                required
                className="h-11 px-4 bg-white border border-slate-200 text-slate-900 focus-visible:ring-2 focus-visible:ring-blue-500/30 focus-visible:border-blue-500 transition-all rounded-xl placeholder:text-slate-400 font-semibold text-sm shadow-sm"
              />
            </div>
          </div>

          <div className="space-y-1">
            <Label htmlFor="book-session-email" className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5 text-violet-600" />
              Email
            </Label>
            <Input
              id="book-session-email"
              name="email"
              type="email"
              placeholder="you@email.com"
              value={formData.email}
              onChange={(e) => setFormData((p) => ({ ...p, email: e.target.value }))}
              required
              className="h-11 px-4 bg-white border border-slate-200 text-slate-900 focus-visible:ring-2 focus-visible:ring-blue-500/30 focus-visible:border-blue-500 transition-all rounded-xl placeholder:text-slate-400 font-semibold text-sm shadow-sm"
            />
          </div>

          <div className="space-y-1">
            <Label htmlFor="book-session-exam" className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
              <GraduationCap className="w-3.5 h-3.5 text-emerald-600" />
              Course
            </Label>
            <Select
              value={formData.exam}
              onValueChange={(val) => setFormData((p) => ({ ...p, exam: val }))}
            >
              <SelectTrigger 
                id="book-session-exam" 
                className="h-11 py-2 px-4 border border-slate-200 bg-white text-slate-900 focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 transition-all rounded-xl text-left font-semibold text-sm flex items-center justify-between gap-3 shadow-sm [&>span]:text-slate-900"
              >
                <SelectValue placeholder="Interested in" />
              </SelectTrigger>
              <SelectContent className="rounded-2xl bg-white border border-slate-200 text-slate-900 shadow-2xl max-h-[260px] p-1.5 z-[250]">
                <SelectItem value="GRE Live Class" className="py-2.5 px-3 cursor-pointer rounded-xl focus:bg-blue-50 focus:text-blue-700 transition-colors">
                  <div className="flex flex-col gap-0.5">
                    <span className="font-bold text-sm text-slate-900">GRE Live Class</span>
                    <span className="text-xs text-slate-500 font-normal">Interactive Live Batch Training</span>
                  </div>
                </SelectItem>
                <SelectItem value="GRE Self-Paced" className="py-2.5 px-3 cursor-pointer rounded-xl focus:bg-blue-50 focus:text-blue-700 transition-colors">
                  <div className="flex flex-col gap-0.5">
                    <span className="font-bold text-sm text-slate-900">GRE Self-Paced</span>
                    <span className="text-xs text-slate-500 font-normal">On-Demand Comprehensive Video Course</span>
                  </div>
                </SelectItem>
                <SelectItem value="GRE Private Tutoring" className="py-2.5 px-3 cursor-pointer rounded-xl focus:bg-blue-50 focus:text-blue-700 transition-colors">
                  <div className="flex flex-col gap-0.5">
                    <span className="font-bold text-sm text-slate-900">GRE Private Tutoring</span>
                    <span className="text-xs text-slate-500 font-normal">1-on-1 Personalized Tutors</span>
                  </div>
                </SelectItem>
                <SelectItem value="GMAT Live Class" className="py-2.5 px-3 cursor-pointer rounded-xl focus:bg-blue-50 focus:text-blue-700 transition-colors">
                  <div className="flex flex-col gap-0.5">
                    <span className="font-bold text-sm text-slate-900">GMAT Live Class</span>
                    <span className="text-xs text-slate-500 font-normal">Interactive Live Batch Training</span>
                  </div>
                </SelectItem>
                <SelectItem value="GMAT Self-Paced" className="py-2.5 px-3 cursor-pointer rounded-xl focus:bg-blue-50 focus:text-blue-700 transition-colors">
                  <div className="flex flex-col gap-0.5">
                    <span className="font-bold text-sm text-slate-900">GMAT Self-Paced</span>
                    <span className="text-xs text-slate-500 font-normal">On-Demand Comprehensive Video Course</span>
                  </div>
                </SelectItem>
                <SelectItem value="GMAT Private Tutoring" className="py-2.5 px-3 cursor-pointer rounded-xl focus:bg-blue-50 focus:text-blue-700 transition-colors">
                  <div className="flex flex-col gap-0.5">
                    <span className="font-bold text-sm text-slate-900">GMAT Private Tutoring</span>
                    <span className="text-xs text-slate-500 font-normal">1-on-1 Personalized Tutors</span>
                  </div>
                </SelectItem>
                <SelectItem value="Admissions Consulting" className="py-2.5 px-3 cursor-pointer rounded-xl focus:bg-blue-50 focus:text-blue-700 transition-colors">
                  <div className="flex flex-col gap-0.5">
                    <span className="font-bold text-sm text-slate-900">Admissions Consulting</span>
                    <span className="text-xs text-slate-500 font-normal">B-School Application & Essay Mentoring</span>
                  </div>
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex flex-col-reverse gap-2.5 sm:flex-row sm:justify-end pt-3 border-t border-slate-100">
            <Button 
              type="button" 
              variant="ghost" 
              onClick={() => onOpenChange(false)} 
              disabled={isSubmitting}
              className="h-11 font-semibold text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-xl transition-colors"
            >
              Cancel
            </Button>
            <Button 
              type="submit" 
              className="h-11 rounded-xl px-8 font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 hover:opacity-95 text-white shadow-lg shadow-indigo-600/25 transition-all flex items-center justify-center gap-2 group cursor-pointer" 
              disabled={!canSubmit}
            >
              {isSubmitting ? (
                "Booking..."
              ) : (
                <>
                  <span>Book Session</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                </>
              )}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
