<template>
    <section id="projets">
        <h1>
            Mes Projets
        </h1>
        <div class="projects">
            <p>
                Voici quelques projets sur lesquels j'ai travaillé.
            </p>
            <ul class="list-projects">
                <li class="project" v-for="project in projects" :key="project.name">
                    <header>
                        <fa icon="fa-regular fa-folder" class="folder"/>
                        <div class="external">
                            <a v-if="project.github" :href=project.github target="_blank">
                                <fa icon="fa-brands fa-square-github" />
                            </a>
                            <a v-if="project.link" :href=project.link target="_blank">
                                <fa icon="fa-solid fa-arrow-up-right-from-square" />
                            </a>
                        </div>
                    </header>
                    <div class="description">
                        <h2>
                            {{ project.name}}
                        </h2>
                        <p>
                            {{ project.description }}
                        </p>
                    </div>
                    <footer class="language">
                        <ul class="listLanguages">
                            <li v-for="language in project.languages" :key="language">
                                {{ language }}
                            </li>
                        </ul>
                    </footer>
                </li>
            </ul>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue';

const projects = ref([
    {
        name: "Porfolio",
        description: "Mon Portfolio fait en Vue.",
        languages: [
            "Vuejs"
        ],
        image: "../../assets/portfolio.png"
    },
    {
        name: "Recipe App",
        description: "Un site permettant d'ajouter différentes recettes et codé avec Vuejs et Firebase.",
        languages: [
            "Vuejs(Router, VueX)",
            "Firebase"
        ],
        github: "https://github.com/NassWebDev/Vue-Recipe",
        link: "https://vue-prj-recipes.web.app"
    },
    {
        name: "To-Do List",
        description: "Un To-Do List permettant d'écrire ses tâches, ainsi que leur priorité et la deadline. Fait en Vuejs.",
        languages: [
            "Vuejs(Router, VueX)"
        ],
        github: "https://github.com/NassWebDev/Vue-ToDo-List"
    }
])
</script>

<style lang="scss" scoped>
section{
    height: 100%;
    padding: 50px 50px 20px;

    h1{
        color: var(--green);
    }

    .projects{
        padding: 50px 20px 0;
        display: flex;
        flex-direction: column;
        row-gap: 50px;

        .list-projects{
            max-width: 100%;
            display: flex;
            flex-wrap: wrap;
            row-gap: 20px;


            .project{
                width: 100%;
                list-style: none;
                background-color: var(--dark-blue);
                padding: 20px 20px;
                display: flex;
                flex-direction: column;
                row-gap: 20px;
                cursor: pointer;
                transition: transform 0.2s ease-in-out;
                will-change: transform;

                &:hover{
                    transform: scale(1.025);

                    h2{
                        color: var(--green);
                    }
                }

                header{
                    display: flex;
                    justify-content: space-between;
                    align-items: center;

                    .folder{
                        font-size: 30px;
                        color: var(--green);
                    }
                    
                    .external{
                        display: flex;
                        font-size: 18px;
                        column-gap: 15px;

                        a{
                            color: var(--white);

                            svg{

                                &:hover{
                                    color: var(--green);
                                }
                            }
                        }
                    }
                }

                .description{

                    h2{
                        font-size: 20px;
                    }

                    p{
                        font-size: 15px;
                    }
                }

                .language{

                    .listLanguages{
                        display: flex;
                        list-style: none;
                        column-gap: 20px;
                    }
                }
            }
        }
    }
}

@media screen and (max-width: 768px) {
    section{
        padding: 50px 30px 20px;

        .projects{
            padding: 50px 5px 0;
        }
    }
}
</style>