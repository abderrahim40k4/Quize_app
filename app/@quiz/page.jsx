'use client';

import React, { useEffect, useState } from 'react';
import useQuiz from '../Store';
import clsx from 'clsx';
import { Skeleton } from '@/components/ui/skeleton';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { cn } from '@/lib/utils';

const Quize = () => {
  const [questions, setQuestions] = useState([]);
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  const changeStatus = useQuiz(state => state.changeStatus);
  const config = useQuiz(state => state.config);
  const addLevel = useQuiz(state => state.addLevel);
  const addCategory = useQuiz(state => state.addCategory);
  const addType = useQuiz(state => state.addType);
  const addQuestionNumber = useQuiz(state => state.addQuestionNumber);
  const setScore = useQuiz(state => state.setScore);

  useEffect(() => {
    async function getQuestions() {
      try {
        setLoading(true);
        const response = await fetch(
          `https://opentdb.com/api.php?amount=${config.numberOfQuestions}&category=${config.category.id}&difficulty=${config.level}&type=${config.type}`
        );

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();

        if (!data.results || !Array.isArray(data.results)) {
          throw new Error('Invalid data structure');
        }

        const shuffledResults = data.results.map((e) => {
          const shuffledAnswers = [...e.incorrect_answers, e.correct_answer]
            .map((answer) => ({ value: answer, sort: Math.random() }))
            .sort((a, b) => a.sort - b.sort)
            .map(({ value }) => value);

          return { ...e, answers: shuffledAnswers };
        });

        setQuestions(shuffledResults);
      } catch (error) {
        console.error('Error fetching questions:', error);
      } finally {
        setLoading(false);
      }
    }

    getQuestions();
  }, [config.category, config.level, config.numberOfQuestions, config.type]);

  const answerCheck = (ans) => {
    if (questions.length > 0 && ans === questions[0].correct_answer) {
      setScore((prevScore) => prevScore + 1); // Increment score
    }
    setAnswer(questions[0]?.correct_answer);
  };

  const handleNext = () => {
    if (questions.length > 1) {
      setQuestions(questions.slice(1)); // Remove the first question and move to the next
      setAnswer("");
    } else {
      setQuestions([]); // All questions are done
    }
  };

  return (
    <section className="flex flex-col justify-center items-center p-20">
      {questions.length > 0 && (
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          Question No{" "}
          <span className="text-blue-600 dark:text-blue-500">
            #{config.numberOfQuestions - questions.length + 1}
          </span>
          .
        </h1>
      )}

      {loading && (
        <div className="flex flex-col">
          <Skeleton className="w-[600px] h-[60px] my-10 rounded-sm" />
          <Skeleton className="w-[600px] h-[500px] rounded-sm" />
        </div>
      )}

      {!loading && questions.length > 0 && (
        <p className="text-2xl">Score: {config.score}</p>
      )}

      {!questions.length && !loading && (
        <div className="flex flex-col justify-center items-center">
          <DotLottieReact
            src="/path/to/animation.lottie"
            loop
            autoplay
          />
          <h1 className="mt-10 text-center font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
            YOUR SCORE:{" "}
            <span className="font-extrabold text-transparent text-10xl bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
              {config.score}
            </span>
          </h1>
          <button
            onClick={() => {
              window.location.reload();
            }}
            className="bg-white hover:bg-gray-100 my-10 text-gray-800 font-semibold py-2 px-10 border border-gray-400 rounded shadow"
          >
            Start Over
          </button>
        </div>
      )}

      {!!questions.length && (
        <section className="shadow-2xl my-10 p-10 w-[90%] rounded-lg flex flex-col justify-center items-center shadow-blue-200">
          <h4 className="mb-4 text-center text-xl font-extrabold leading-none tracking-tight md:text-2xl lg:text-4xl text-blue-600 dark:text-blue-500">
            {questions[0].question}
          </h4>
          <div className="flex justify-evenly items-center w-full my-20 flex-wrap">
            {questions[0].answers.map((e) => (
              <button
                key={e}
                onClick={() => answerCheck(e)}
                className={cn(
                  "w-[40%] my-4 bg-white hover:bg-blue-600 hover:text-gray-100 text-gray-800 font-semibold py-4 px-4 shadow-blue-200 rounded-lg shadow-2xl",
                  {
                    "bg-blue-600": !!answer && answer === e,
                    "bg-red-600": !!answer && answer !== e,
                    "text-gray-200": !!answer,
                  }
                )}
              >
                {e}
              </button>
            ))}
          </div>

          <button
            onClick={handleNext}
            className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-10 border border-gray-400 rounded shadow"
          >
            Next
          </button>
        </section>
      )}
    </section>
  );
};

export default Quize;
