'use client'
import { usePathname } from 'next/navigation'

const H3 = ({ children }: { children: React.ReactNode }) => (
  <h3 className="font-courier_prime text-[10px] tracking-[0.18em] uppercase text-terra border-b border-terra pb-1.5 mt-7 mb-3">
    {children}
  </h3>
)

const P = ({ children }: { children: React.ReactNode }) => (
  <p className="font-playfair text-[15px] leading-[1.75] text-inkMuted mb-4">
    {children}
  </p>
)

const UL = ({ children }: { children: React.ReactNode }) => (
  <ul className="font-playfair text-[15px] leading-[1.75] text-inkMuted mb-4 list-disc pl-5 marker:text-terra">
    {children}
  </ul>
)

export default function Syllabus() {
  const pathName = usePathname()
  const parts = pathName.split('/')
  const course = parts[1]

  return (
    <section>
      <span className="section-tag">Syllabus &middot; Spring &rsquo;25</span>
      <h2 className="font-playfair font-black text-ink text-3xl sm:text-4xl mt-2 mb-6">
        Course Information
      </h2>

      {course === 'cs210' ? (
        <div>
          <H3>Class Times</H3>
          <UL>
            <li>Tuesday &amp; Thursday</li>
            <li>7:00 PM &ndash; 8:15 PM @ LSS 365, TA: Apeksha</li>
          </UL>

          <H3>Important Dates</H3>
          <UL>
            <li>Midterms: TBD</li>
            <li>Final Exam: TBD</li>
          </UL>

          <H3>Course Catalog Description</H3>
          <P>
            Representations and operations on basic data structures. Arrays,
            linked lists, stacks, queues, and recursion; binary search trees and
            balanced trees; hash tables, dynamic storage management;
            introduction to graphs. An object-oriented programming language
            will be used.
          </P>

          <H3>Goals for this Course</H3>
          <UL>
            <li>Analyze and measure complexities of algorithms</li>
            <li>Write generic and reusable code in C++</li>
            <li>
              Understand inheritance, interfaces, polymorphism, and abstract
              data types in C++
            </li>
            <li>
              Apply design and development principles in the construction of
              software systems of varying complexity
            </li>
          </UL>

          <H3>Textbook</H3>
          <P>
            No textbook is required. Attendance will account for 5% of the
            final grade.
          </P>

          <H3>Programming Language Used</H3>
          <P>
            The course will use C++, and all programming assignments must be
            developed in CLion. CLion is available for free with your SDSU ID.
            Students are required to author original C++ code for all
            assignments. Collaboration to discuss strategies is encouraged, but
            submitted work must be entirely individual. Sharing code with
            others is strictly prohibited.
          </P>

          <H3>Grading</H3>
          <UL>
            <li>Written Assignments: 10%</li>
            <li>Attendance: 5%</li>
            <li>Programming Assignments: 30%</li>
            <li>Midterms: 30%</li>
            <li>Final Exam: 25%</li>
          </UL>

          <H3>Grade Split</H3>
          <UL>
            <li>93% and above: A</li>
            <li>90&ndash;92%: A&ndash;</li>
            <li>87&ndash;89%: B+</li>
            <li>83&ndash;86%: B</li>
            <li>80&ndash;82%: B&ndash;</li>
            <li>77&ndash;79%: C+</li>
            <li>72&ndash;76%: C</li>
            <li>70&ndash;71%: C&ndash;</li>
            <li>67&ndash;69%: D+</li>
            <li>63&ndash;66%: D</li>
            <li>60&ndash;62%: D&ndash;</li>
            <li>Below 60%: F</li>
          </UL>

          <H3>Turning in Work</H3>
          <P>
            Instructions on what, when, where, and how to turn in assignments
            will be posted on Canvas, email, and Discord. It is the
            student&rsquo;s responsibility to understand when and how to turn
            in the assignments.
          </P>

          <H3>Late Coursework</H3>
          <P>
            All assignments are due on the date stated on Canvas. Once the due
            date has passed, links will be closed. Late assignments will be
            marked down 25% per day of delay.
          </P>
          <UL>
            <li>1 day late: &minus;25%</li>
            <li>2 days late: &minus;50%</li>
            <li>3 days late: &minus;75%</li>
            <li>4th day: automatic zero</li>
          </UL>

          <H3>Exams</H3>
          <P>
            Exams are closed book / closed notes. Computers, laptops and cell
            phones cannot be used during exams. Once an exam starts, students
            cannot leave and then return to the test room. Do not seek
            assistance from other students during an exam; speak with the
            instructor instead. Dates, times, and locations of the midterms
            and final exam will be posted on Canvas.
          </P>

          <H3>Classroom Etiquette</H3>
          <P>
            Cell phones should be turned off or set to vibrate during class. If
            using laptops to take notes, please keep them muted. Class
            participation is highly encouraged &mdash; ask questions and
            initiate discussions respectfully.
          </P>

          <H3>Academic Honesty</H3>
          <P>
            The college experience is founded on honesty and integrity.
            Dishonesty, cheating, plagiarism, or knowingly furnishing false
            information are regarded as particularly serious offenses and will
            be handled with appropriate penalties.
          </P>

          <H3>Special Accommodations</H3>
          <P>
            If you are a student with a disability and believe you will need
            accommodations for this class, please contact Student Disability
            Services at (619) 594-6473 as early as possible. Accommodations
            are not retroactive and cannot be provided until you have presented
            an accommodation letter from Student Disability Services.
          </P>

          <hr className="ruling-double" />
        </div>
      ) : course === 'cs460' ? (
        <div>
          <H3>Class Times</H3>
          <UL>
            <li>Tuesday &amp; Thursday</li>
            <li>12:30 PM &ndash; 1:45 PM @ OP 201, TA: Marcus</li>
            <li>5:30 PM &ndash; 6:45 PM @ LH 343, TA: JD</li>
          </UL>

          <H3>Important Dates</H3>
          <UL>
            <li>Midterms: TBD</li>
            <li>Final Exam: TBD</li>
          </UL>

          <H3>Course Catalog Description</H3>
          <P>
            Algorithms for solving frequently occurring problems. Analysis
            techniques, divide and conquer algorithms with applications, graph
            problems, greedy algorithms. Introduction to NP-complete problems.{' '}
            <strong className="text-ink">Prerequisite(s):</strong> CS 210 and MATH 245.
          </P>

          <H3>Class Flow</H3>
          <P>
            This class does not have traditional testing. All exams and
            assignments are APA7-style student research papers. Analyzing
            algorithms and writing proofs is an art that cannot be tested by
            memorization of facts. Writing in-depth quality papers builds
            research and technical-writing skills, both of which are invaluable
            in academia and industry.
          </P>

          <H3>Goals for this Course</H3>
          <P>Upon completion of this course students will be able to:</P>
          <UL>
            <li>Analyze and measure complexities of algorithms</li>
            <li>Write proofs of optimality and completeness of algorithms</li>
            <li>Author APA7-style student papers</li>
          </UL>

          <H3>Textbook</H3>
          <UL>
            <li><em>The Algorithm Design Manual</em> &mdash; Steven Skiena</li>
            <li>
              <em>Computer Algorithms &mdash; Introduction to Design &amp; Analysis</em> &mdash; Sara Baase &amp; Allen Van Gelder
            </li>
          </UL>

          <H3>Grading</H3>
          <UL>
            <li>Weekly Assignments (35%)</li>
            <li>Quizzes &amp; Participation (10%)</li>
            <li>2 Midterms (15% + 15%)</li>
            <li>Final Exam (25%)</li>
          </UL>

          <H3>Grade Split</H3>
          <UL>
            <li>93% and above: A</li>
            <li>90&ndash;92%: A&ndash;</li>
            <li>87&ndash;89%: B+</li>
            <li>83&ndash;86%: B</li>
            <li>80&ndash;82%: B&ndash;</li>
            <li>77&ndash;79%: C+</li>
            <li>73&ndash;76%: C</li>
            <li>70&ndash;72%: C&ndash;</li>
            <li>67&ndash;69%: D+</li>
            <li>63&ndash;66%: D</li>
            <li>60&ndash;62%: D&ndash;</li>
            <li>Below 60%: F</li>
          </UL>

          <H3>Turning in Work</H3>
          <P>
            Instructions on what, when, where, and how to turn in assignments
            will be posted on Canvas, email, and Discord. It is the
            student&rsquo;s responsibility to understand when and how to turn
            in the assignments.
          </P>

          <H3>Late Coursework</H3>
          <P>
            All assignments are due on the date stated on Canvas. Once the due
            date has passed, links will be closed. Late assignments will be
            marked down 25% per day of delay.
          </P>
          <UL>
            <li>1 day late: &minus;25%</li>
            <li>2 days late: &minus;50%</li>
            <li>3 days late: &minus;75%</li>
            <li>4th day: automatic zero</li>
          </UL>

          <H3>Exams</H3>
          <P>
            Exams are closed book / closed notes. Once an exam starts, students
            cannot leave and then return to the test room. Dates, times, and
            locations of the midterms and final exam will be posted on Canvas.
          </P>

          <H3>Classroom Etiquette</H3>
          <P>
            Cell phones should be set to silent during class. Laptops used for
            notes should be muted. Class participation is highly encouraged.
          </P>

          <H3>Academic Honesty</H3>
          <P>
            Dishonesty, cheating, plagiarism, or knowingly furnishing false
            information are regarded as serious offenses and will be handled
            with appropriate penalties.
          </P>

          <H3>Special Accommodations</H3>
          <P>
            If you need accommodations, please contact Student Disability
            Services at (619) 594-6473 as early as possible.
          </P>

          <hr className="ruling-double" />
        </div>
      ) : course === 'cs577' ? (
        <div>
          <P>Syllabus details coming soon.</P>
          <hr className="ruling-double" />
        </div>
      ) : (
        <div>
          <P>Course not found.</P>
        </div>
      )}
    </section>
  )
}
