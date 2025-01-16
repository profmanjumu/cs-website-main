'use client'
import { usePathname } from 'next/navigation'
import { Separator } from '../ui/separator'
export default function Syllabus() {
  const pathName = usePathname()
  const parts = pathName.split('/')
  const course = parts[1]
  console.log(pathName, '')
  console.log(parts, '')

  return (
    <div className="p-10 text-justify">
      <h1 className="text-4xl font-roboto_condensed mb-4 text-discordText">
        Syllabus (Fall '24)
      </h1>
      {course === 'cs210' ? (
        <div className="font-roboto_condensed">
          {/* CS210 Syllabus Content */}
          <h3 className="font-semibold">Class Times:</h3>
          <ul className="mb-5 font-dm_serif_display">
            <li>Monday & Wednesday</li>
            <li>4:00 - 5:15PM @ HT183, TA: Alex</li>
            <li>5:30 - 6:45PM @ GMCS 301, TA: Jaydeep</li>
            <li>Tuesday & Thursday</li>
            <li>11:00 - 12:15PM @ LH347, TA: Haile</li>
            <li>5:30 - 6:45PM @ SH101, TA: Apeksha</li>
          </ul>

          <h3 className="font-semibold">Important Dates:</h3>
          <ul className="mb-5 font-dm_serif_display">
            <li>Monday & Wednesday</li>
            <li>Midterm 1: Sept 30th, Midterm 2: Nov 6th</li>
            <li>Final Exam: Monday, December 16th 3:30-5:30 p.m.</li>
            <li>Tuesday & Thursday</li>
            <li>Midterm 1: Oct 1st, Midterm 2: Nov 7th</li>
            <li>Final Exam: Tuesday, December 17th 10:30 a.m.-12:30 p.m.</li>
          </ul>

          <h3 className="font-semibold">Course Catalog Description:</h3>
          <p className="mb-5 font-dm_serif_display">
            Representations and operations on basic data structures. Arrays,
            linked lists, stacks, queues, and recursion; binary search trees and
            balanced trees; hash tables, dynamic storage management;
            introduction to graphs. An object-oriented programming language will
            be used.
          </p>

          <h3 className="font-semibold">Goals for this Course:</h3>
          <ul className="mb-5 font-dm_serif_display">
            <li>Analyze and measure complexities of algorithms</li>
            <li>Write Generic and Reusable code in C++</li>
            <li>
              Understand Inheritance, Interfaces, Polymorphism, and Abstract
              Data Types in C++
            </li>
            <li>
              Apply design and development principles in the construction of
              software systems of varying complexity
            </li>
          </ul>

          <h3 className="font-semibold">Textbook:</h3>
          <p className="mb-5 font-dm_serif_display">
            This course will primarily use ZyBooks. A subscription is $89, and
            the zyBook code is: SDSUCS210MuralidharanFall2024.
          </p>

          <h3 className="font-semibold">Programming Language Used:</h3>
          <p className="mb-5 font-dm_serif_display">
            C++ in CLion. Students must author original C++ code for all
            projects throughout this course.
          </p>

          <h3 className="font-semibold">Grading:</h3>
          <ul className="mb-5 font-dm_serif_display">
            <li>Written Assignments: 10%</li>
            <li>ZyBooks Participation: 5%</li>
            <li>Programming Assignments: 30%</li>
            <li>Midterms: 30%</li>
            <li>Final Exam: 25%</li>
          </ul>

          <h3 className="font-semibold">Grade Split:</h3>
          <ul className="mb-5 font-dm_serif_display">
            <li>93% and above: A</li>
            <li>90%-92%: A–</li>
            <li>Below 60%: F</li>
          </ul>

          <h3 className="font-semibold">Late Coursework:</h3>
          <p className="mb-5 font-dm_serif_display">
            Late assignments will be marked down 25% every day of delay, and
            submissions will not be accepted after 4 days.
          </p>
          <Separator />
        </div>
      ) : course === 'cs460' ? (
        <div className="font-roboto_condensed">
          {/* CS460 Syllabus Content */}
          <h3 className="font-semibold">Class Times:</h3>
          <p className="mb-5 font-dm_serif_display">
            Tuesday & Thursday 2:00 - 3:15PM CS460 @LH347
          </p>

          <h3 className="font-semibold">Important Dates:</h3>
          <ul className="mb-5 font-dm_serif_display">
            <li>Midterm 1: Oct 1st</li>
            <li>Midterm 2: Nov 7th</li>
            <li>Final Exam: Tuesday, December 17th 1-3 p.m.</li>
          </ul>

          <h3 className="font-semibold">Course Catalog Description:</h3>
          <p className="mb-5 font-dm_serif_display">
            Algorithms for solving frequently occurring problems. Analysis
            techniques, divide and conquer algorithms, graph problems, greedy
            algorithms, and introduction to NP-complete problems. Prerequisites:
            CS 210 and MATH 245.
          </p>

          <h3 className="font-semibold">Goals for this Course:</h3>
          <ul className="mb-5 font-dm_serif_display">
            <li>Analyze and measure complexities of algorithms</li>
            <li>Write Proof of optimality and completeness of algorithms</li>
            <li>Author APA7 style student papers</li>
          </ul>

          <h3 className="font-semibold">Textbook:</h3>
          <ul className="mb-5 font-dm_serif_display">
            <li>The Algorithm Design Manual - Steven Skiena</li>
            <li>
              Computer Algorithms: Introduction to Design & Analysis - Sara
              Baase & Allen Van Gelder
            </li>
          </ul>

          <h3 className="font-semibold">Grading:</h3>
          <ul className="mb-5 font-dm_serif_display">
            <li>Weekly Assignments: 35%</li>
            <li>Quizzes & Participation: 10%</li>
            <li>Midterms: 30%</li>
            <li>Final Exam: 25%</li>
          </ul>
          <Separator />
        </div>
      ) : course === 'cs496' ? (
        <div className="font-roboto_condensed">
          {/* CS496 Placeholder Content */}
          <h3 className="font-semibold">Class Times:</h3>
          <p className="mb-5 font-dm_serif_display">
            Placeholder content for CS496 syllabus.
          </p>
          <Separator />
        </div>
      ) : (
        <div className="font-roboto_condensed">
          {/* Default Content */}
          <p className="mb-5 font-dm_serif_display">Course not found.</p>
        </div>
      )}
    </div>
  )
}
