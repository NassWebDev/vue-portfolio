<template>
    <section id="apropos">
        <h1>
            A Propos De Moi
        </h1>
        <div class="about">
            <p>
            Bonjour, je suis Nassim et je suis un <span>Développeur Front-End</span>. Je cherche à me spécialiser le plus possible dans divers technologies Web pouvant m'intéresser. En ce moment, je cherche une alternance pour un poste de développeur Front-End, dont une école pour un bachelor spécialisé dans le développement Web.
            </p>
            <div class="languages">
                <h2>
                    Front-End
                </h2>
                <ul class="front-end">
                    <li v-for="front in frontEnd" :key="front.name">
                        <fa :icon="`fa-brands fa-` + front.icon" />
                        <p>{{ front.name }}</p>
                    </li>
                </ul>
                <h2>
                    Back-End
                </h2>
                <ul class="back-end">
                    <li v-for="back in backEnd" :key="back.name">
                        <fa v-if="back.icon" :icon="`fa-brands fa-` + back.icon" />
                        <img v-else src="../../assets/firebase.svg" alt="firebase">
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
        icon: 'html5'
    },
    {
        name: "CSS",
        icon: 'css3-alt'
    },
    {
        name: "Sass",
        icon: 'sass'
    },
    {
        name: "JavaScript",
        icon: 'js'
    },
    {
        name: "VueJs",
        icon: 'vuejs'
    }
])

const backEnd = ref([
{
        name: "PHP",
        icon: 'php'
    },
    {
        name: "Firebase"
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

                    img{
                        width: 30px;
                        height: 30px;
                        color: white;
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