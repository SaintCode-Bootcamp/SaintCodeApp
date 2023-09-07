import { Display, PrismaClient, TypeTask } from "@prisma/client";

// initialize Prisma Client
const prisma = new PrismaClient();

async function main() {
  const now = new Date();

  const level_content_lecture_1 = await prisma.level_content.upsert({
    where: { id: "64d63ab1980ffe56f1c0c2f8" },
    update: {},
    create: {
      id: "64d63ab1980ffe56f1c0c2f8",
      order: 1,
      chapter_level_id: "64e7d6270d4f09cada4267a9",
      desc: "Вступительная теория",
      lectures: {
        create: {
          title: "Работа с основными HTML тегами",
          type: TypeTask.LECTURE,
          content: "<div style=\"max-width: 40rem; margin: 0 auto;\">\n" +
            "<p>Любой сайт начинается с верстки. И чтобы на странице появились любые элементы: картинки, кнопки, текст, используютспользуютспользуют язык разметки HTML</p>\n" +
            "<p>HTML (HyperText Markup Language) - это язык гипертекстовой разметки.</p>\n" +
            "<p>Еслислисли сравнить сайт с домом, то этотото его каркас, ссстены и крыша, но без ремонта.</p>\n" +
            "</div>",
          created_at: now.toISOString(),
          updated_at: now.toISOString(),
          created_by: "64d63774980ffe56f1c0c2ef",
          time_to_read: 5,
          is_draft: false
        }
      }
    }
  });

  const level_content_task_2 = await prisma.level_content.upsert({
        where: { id: "64d63ab1980ffe56f1c0c2f9" },
        update: {},
        create: {
          id: "64d63ab1980ffe56f1c0c2f9",
          order: 2,
          chapter_level_id: "64e7d6270d4f09cada4267a9",
          desc: "Какое-то описание. Это задача",
          tasks: {
            create: {
              name: "Работа с основными HTML тегами",
              title: "Какой язык разметки отвечает за верстку на странице?",
              type: TypeTask.CHOICE,
              display: Display.LIST,
              is_archive: false,
              difficulty: 1,
              tags: ["HTML"],
              created_by: "64d63774980ffe56f1c0c2ef",
              tasks_choice: {
                create: {
                  content: "",
                  answers: {
                    "q1": {
                      "title": "JavaScript",
                      "is_correct": false
                    },
                    "q2": {
                      "title": "HTML",
                      "is_correct": true
                    },
                    "q3": {
                      "title": "CSS",
                      "is_correct": false
                    },
                    "q4": {
                      "title": "Java",
                      "is_correct": false
                    }
                  }
                }
              }
            }
          }
        }
      }
    );

  const level_content_task_3 = await prisma.level_content.upsert({
      where: { id: "64f2f358434db69e4c9bb4d7" },
      update: {},
      create: {
        id: "64f2f358434db69e4c9bb4d7",
        order: 3,
        chapter_level_id: "64e7d6270d4f09cada4267a9",
        desc: "Какое-то описание. Это задача",
        tasks: {
          create: {
            name: "Работа с основными HTML тегами",
            title: "Добавление тега",
            type: TypeTask.FILL_BLANKS,
            display: Display.LIST,
            is_archive: false,
            difficulty: 1,
            tags: ["HTML"],
            created_by: "64d63774980ffe56f1c0c2ef",
            tasks_fill_blanks: {
              create: {
                content: "<div style=\"max-width: 40rem; margin: 0 auto;\">\n" +
                  "<p><span data-token-index=\"1\">Чтобы добавить элемент на страницу, в HTML используют теги Пример &lt; tag &gt;</span> Для добавления кнопки, вввнутри скобок должен стоять button Попробуй создать тег кнопки</p>\n" +
                  "</div>",
                answers: ["<button>", "<h1>", "<tag>", "<h6>"],
                template: "{1}",
                rightAnswer: "<button>"
              }
            }
          }
        }
      }
    }
  );

  const level_content_task_4 = await prisma.level_content.upsert({
        where: { id: "64f2f377434db69e4c9bb4d8" },
        update: {},
        create: {
          id: "64f2f377434db69e4c9bb4d8",
          order: 4,
          chapter_level_id: "64e7d6270d4f09cada4267a9",
          desc: "Какое-то описание. Это задача",
          tasks: {
            create: {
              name: "Работа с основными HTML тегами",
              title: "Какой тег создает кнопку? ",
              type: TypeTask.CHOICE,
              display: Display.LIST,
              is_archive: false,
              difficulty: 1,
              tags: ["HTML"],
              created_by: "64d63774980ffe56f1c0c2ef",
              tasks_choice: {
                create: {
                  content: "",
                  answers: {
                    "q1": {
                      "title": "<h1>",
                      "is_correct": false
                    },
                    "q2": {
                      "title": "<p>",
                      "is_correct": false
                    },
                    "q3": {
                      "title": "<h4>",
                      "is_correct": false
                    },
                    "q4": {
                      "title": "<button>",
                      "is_correct": true
                    }
                  }
                }
              }
            }
          }
        }
      }
    )
  ;
  const level_content_task_5 = await prisma.level_content.upsert({
      where: { id: "64f2f358434db69e4c9bb4d8" },
      update: {},
      create: {
        id: "64f2f358434db69e4c9bb4d8",
        order: 5,
        chapter_level_id: "64e7d6270d4f09cada4267a9",
        desc: "Какое-то описание. Это задача",
        tasks: {
          create: {
            name: "",
            title: "Попробуй сам написать свой первый тег",
            type: TypeTask.FILL_BLANKS,
            display: Display.LIST,
            is_archive: false,
            difficulty: 1,
            tags: ["HTML"],
            created_by: "64d63774980ffe56f1c0c2ef",
            tasks_fill_blanks: {
              create: {
                content: "<div style=\"max-width: 40rem; margin: 0 auto;\">\n" +
                  "</div>",
                answers: ["<button>", "<", ">"],
                template: "{1} {2} {3}",
                rightAnswer: "<button>"
              }
            }
          }
        }
      }
    }
  );

  const level_content_task_6 = await prisma.level_content.upsert({
      where: { id: "64f2f358434db69e4c9bb4d9" },
      update: {},
      create: {
        id: "64f2f358434db69e4c9bb4d9",
        order: 6,
        chapter_level_id: "64e7d6270d4f09cada4267a9",
        desc: "Попробуй закрыть тег",
        tasks: {
          create: {
            name: "",
            title: "Попробуй закрыть тег",
            type: TypeTask.FILL_BLANKS,
            display: Display.LIST,
            is_archive: false,
            difficulty: 1,
            tags: ["HTML"],
            created_by: "64d63774980ffe56f1c0c2ef",
            tasks_fill_blanks: {
              create: {
                content: "<div style=\"max-width: 40rem; margin: 0 auto;\">\n" +
                  "<p><span data-token-index=\"1\"><button> - это только начало тега, его называют открывающим, но у него есть и закрывающая часть. Она точно такая же, только после первой скобки стоит символ /   Попробуй закрыть тег</p>\n" +
                  "</div>",
                answers: ["{", "/", "button", ">", "<", "}", "tag"],
                template: "<button>{1} {2} {3} {4}",
                rightAnswer: "<button></button>"
              }
            }
          }
        }
      }
    }
  );

  const level_content_task_7 = await prisma.level_content.upsert({
      where: { id: "64e26a12980ffe56f1c0c41f" },
      update: {},
      create: {
        id: "64e26a12980ffe56f1c0c41f",
        order: 7,
        chapter_level_id: "64e7d6270d4f09cada4267a9",
        desc: "Что изобразит данный код?",
        tasks: {
          create: {
            name: "",
            title: "Что изобразит данный код?",
            type: TypeTask.CHOICE,
            display: Display.LIST,
            is_archive: false,
            difficulty: 1,
            tags: ["HTML"],
            created_by: "64d63774980ffe56f1c0c2ef",
            tasks_choice: {
              create: {
                content: "<div style=\"max-width: 40rem; margin: 0 auto;\">\n" +
                  "<p><code>&lt;button&gt;SaintCode&lt;/button&gt;</code></p>\n" +
                  "</div>",
                answers: {
                  "q1": {
                    "title": "кнопку Saint Code",
                    "is_correct": false
                  },
                  "q2": {
                    "title": "SaintCode",
                    "is_correct": false
                  },
                  "q3": {
                    "title": "кнопку SaintCode",
                    "is_correct": true
                  },
                  "q4": {
                    "title": "заголовок SaintCode",
                    "is_correct": false
                  }
                }
              }
            }
          }
        }
      }
    }
  );

  const level_content_task_8 = await prisma.level_content.upsert({
      where: { id: "64f07e39434db69e4c9bb4aa" },
      update: {},
      create: {
        id: "64f07e39434db69e4c9bb4aa",
        order: 8,
        chapter_level_id: "64e7d6270d4f09cada4267a9",
        desc: "Закрытие тега button2",
        tasks: {
          create: {
            name: "Закрытие тега button2",
            title: "Закрой тег",
            type: TypeTask.FILL_BLANKS,
            display: Display.LIST,
            is_archive: false,
            difficulty: 1,
            tags: ["HTML"],
            created_by: "64d63774980ffe56f1c0c2ef",
            tasks_fill_blanks: {
              create: {

                content: "<div style=\"max-width: 40rem; margin: 0 auto;\">\n" +
                  "<p><code>&lt;button&gt;SaintCode&lt;/button&gt;</code></p>\n" +
                  "</div>",
                answers: ["<", "/", "button", ">", "[", "]"],
                template: "<button>Just Do It! {1} {2} {3} {4}",
                rightAnswer: "<button>Just Do It!</button>"
              }
            }
          }
        }
      }
    }
  );

  const level_content_task_9 = await prisma.level_content.upsert({
      where: { id: "string" },
      update: {},
      create: {
        id: "string",
        order: 9,
        chapter_level_id: "64e7d6270d4f09cada4267a9",
        desc: "Создай кнопку с текстом button",
        tasks: {
          create: {
            name: "",
            title: "Создай кнопку с текстом button",
            type: TypeTask.FILL_BLANKS,
            display: Display.LIST,
            is_archive: false,
            difficulty: 1,
            tags: ["HTML"],
            created_by: "64d63774980ffe56f1c0c2ef",
            tasks_fill_blanks: {
              create: {

                content: "<div style=\"max-width: 40rem; margin: 0 auto;\">\n" +
                  "<p><code>&lt;button&gt;SaintCode&lt;/button&gt;</code></p>\n" +
                  "</div>",
                answers: ["</button>", "<h1>", "button", "h1", "<button>", "</h1>"],
                template: "{1} {2} {3}",
                rightAnswer: "<button>button</button>"
              }
            }
          }
        }
      }
    }
  );

  const level_content_task_10 = await prisma.level_content.upsert({
    where: { id: "string" },
    update: {},
    create: {
      id: "string",
      order: 10,
      chapter_level_id: "64e7d6270d4f09cada4267a9",
      desc: "Какого символа не хватает?",
      tasks: {
        create: {
          name: "",
          title: "Какого символа не хватает?",
          type: TypeTask.FILL_BLANKS,
          display: Display.LIST,
          is_archive: false,
          difficulty: 1,
          tags: ["HTML"],
          created_by: "64d63774980ffe56f1c0c2ef",
          tasks_fill_blanks: {
            create: {

              content: "<div style=\"max-width: 40rem; margin: 0 auto;\">\n" +
                "<p><code>&lt;button&gt;SaintCode&lt;/button&gt;</code></p>\n" +
                "</div>",
              answers: ["&#92;", "|", "/"],
              template: "<button>Новости<{1}button>",
              rightAnswer: "<button>Новости</button>"
            }
          }
        }
      }
    }
  }
);

const level_content_task_11 = await prisma.level_content.upsert({
    where: { id: "string" },
    update: {},
    create: {
      id: "string",
      order: 11,
      chapter_level_id: "64e7d6270d4f09cada4267a9",
      desc: "Создай кнопку Нажми меня",
      tasks: {
        create: {
          name: "",
          title: "Создай кнопку Нажми меня",
          type: TypeTask.FILL_BLANKS,
          display: Display.LIST,
          is_archive: false,
          difficulty: 1,
          tags: ["HTML"],
          created_by: "64d63774980ffe56f1c0c2ef",
          tasks_fill_blanks: {
            create: {

              content: "<div style=\"max-width: 40rem; margin: 0 auto;\">\n" +
                "<p><code>&lt;button&gt;SaintCode&lt;/button&gt;</code></p>\n" +
                "</div>",
              answers: [">", "Нажми ", "<", "button", "/", ">", "button", "меня", "<"],
              template: "{1} {2} {3} {4} {5} {6} {7} {8}",
              rightAnswer: "<button>Нажми меня</button>"
            }
          }
        }
      }
    }
  }
);

  console.log({ level_content_lecture_1, level_content_task_2, level_content_task_3, level_content_task_4 , level_content_task_5 , level_content_task_6,  level_content_task_7,  level_content_task_8, level_content_task_9, level_content_task_10, level_content_task_11});
}

// execute the main function
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // close Prisma Client at the end
    await prisma.$disconnect();
  });