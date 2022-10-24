---
layout: ../layouts/PageLayout.astro
title: About Me
---

```elixir
def me do
  %{
    name: ["Tristan Yang", "杨宇恒 (Yáng Yǔhéng)"],
    alias: "TunkShif",
    email: "tunkshif@foxmail.com",
    location: {"Sichuan", "China"},
    education: {"UESTC", "Software Engineering"},
    languages: [:en, :cn, :es],
    tech_stack: [
      [:elixir, :typescript, :rust],
      [:phoenix, :react, :tailwindcss]
    ],
    interests: ["Programming", "Languages", "Linguistics"]
  }
end
```
