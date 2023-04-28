<template>
    <section id="apropos">
        <h1>
            A Propos De Moi
        </h1>
        <div class="about">
            <p>
            Bonjour, je suis Nassim et je suis un <span>Développeur Full-Stack</span>. Je cherche à me spécialiser le plus possible dans divers technologies Web pouvant m'intéresser. En ce moment, je cherche une alternance pour un poste de développeur Full-Stack, dont une école pour un bachelor spécialisé dans le développement Web.
            </p>
            <div class="languages">
                <h2>
                    Front-End
                </h2>
                <ul class="front-end">
                    <li v-for="front in frontEnd" :key="front.name">
                        <fa :name=front.icon scale="1.8"/>
                        <p>{{ front.name }}</p>
                    </li>
                </ul>
                <h2>
                    Back-End
                </h2>
                <ul class="back-end">
                    <li v-for="back in backEnd" :key="back.name">
                        <fa :name=back.icon scale="1.8"/>
                        <p>{{ back.name }}</p>
                    </li>
                </ul>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue';

const frontEnd = ref([
    {
        name: "HTML",
        icon: 'fa-html5'
    },
    {
        name: "CSS",
        icon: 'fa-css3-alt'
    },
    {
        name: "Sass",
        icon: 'fa-sass'
    },
    {
        name: "JavaScript",
        icon: 'si-javascript'
    },
    {
        name: "VueJS",
        icon: 'fa-vuejs'
    }
])

const backEnd = ref([
{
        name: "PHP",
        icon: 'fa-php'
    },
    {
        name: "Firebase",
        icon: 'si-firebase'
    },
    {
        name: "MongoDB",
        icon: 'si-mongodb'
    },
    {
        name: "ExpressJS",
        icon: 'si-express'
    },
    {
        name: "NodeJS",
        icon: 'fa-node'
    }
])
</script>

<style lang="scss" scoped>
section{
    height: 100%;
    padding: 50px 80px 20px;

    h1{
        color: var(--green);
    }

    .about{
        padding: 50px 20px 0;
        display: flex;
        flex-direction: column;
        row-gap: 50px;

        p{
            font-size: 17px;

            span{
                color: var(--green);
            }
        }

        .languages{
            display: flex;
            flex-direction: column;
            align-items: center;

            ul{
                margin: 50px 0;
                display: flex;
                justify-content: center;
                align-items: center;
                flex-wrap: wrap;
                column-gap: 20px;
                row-gap: 20px;

                li{
                    width: 150px;
                    height: 90px;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    row-gap: 5px;
                    list-style: none;
                    transition: all 0.2s ease-in-out;
                    cursor: pointer;
                    background-color: #051329;
                    border-radius: 7px;

                    &:hover{
                        box-shadow: var(--green) 0px 0px 8px 0px;
                    }

                    svg{
                        font-size: 30px;
                    }
                }
            }
        }
    }
}


@media screen and (max-width: 768px) {
    section{
        padding: 50px 30px 20px;

        .about{
            padding: 50px 5px 0;

            
            .languages{

                .front-end{
                    column-gap: 5px;
                }

                .back-end{
                    column-gap: 5px;
                }
            }
        }
    }
}
</style>