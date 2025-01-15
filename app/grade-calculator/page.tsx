"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

type Grade = {
  grade: string;
  weight: number;
};

export default function GradeCalculatorPage() {
  const [values, setValues] = useState({
    homework: "",
    midterm: "",
    final: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    console.log(`${e.target.name}: ${e.target.value}`);
  };

  const handleSubmit = () => {};

  return (
    <main className="py-16 container flex items-center justify-center min-h-screen">
      <Card className="w-1/3">
        <CardHeader>
          <CardTitle>Grade Calculator</CardTitle>
          <CardDescription>
            Enter your grades and see what you need to get on your final to get
            the grade you want.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <form onSubmit={handleSubmit} className="space-y-2">
            <Label htmlFor="homework">Homework</Label>
            <Input
              onChange={(e) => handleChange(e)}
              value={values.homework}
              name="homework"
            />
            <Label htmlFor="midterm">Midterm</Label>
            <Input
              onChange={(e) => handleChange(e)}
              value={values.midterm}
              name="midterm"
            />
            <Label htmlFor="final">Final</Label>
            <Input
              onChange={(e) => handleChange(e)}
              value={values.final}
              name="final"
            />
          </form>
        </CardContent>
      </Card>
    </main>
  );
}
