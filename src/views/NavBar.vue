<template>
    <aside :class="{ isOpen: props.isActive }">
        <header>
            <img src="../assets/kayden.jpg" alt="kayden">
            <p class="name">Nassim</p>
            <p class="post">Développeur Front-End</p>
        </header>
        <ul>
            <li v-for="item in navItems" :key="item" class="itemNav">
                <router-link :to="`/${item.link}`" @click="goToSection(item.link)">
                    {{ item.name }}
                </router-link>
            </li>
        </ul>
        <footer>
            <ul>
                <li v-for="alink in links" :key="alink.name">
                    <a :href=alink.link target="_blank">
                        <fa :icon="`fa-` + alink.type + ` fa-` + alink.name"/>
                    </a>
                </li>
            </ul>
        </footer>
    </aside>
</template>

<script setup>
const props = defineProps(['navItems', 'links', 'isActive'])
const goToSection = ((section) => {
    const aSection = document.getElementById(section)
    if(section == "home"){
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }
    else{
        aSection.scrollIntoView({
            behavior: "smooth",
            block: "start"
        })
    }
});
</script>

<style lang="scss">
aside{
    width: var(--navbar-body);
    height: 100%;
    position: fixed;
    background-color: var(--dark-blue);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: var(--white);
    row-gap: 50px;
    font-size: 15px;

    
    header{
        display: flex;
        flex-direction: column;
        align-items: center;
        row-gap: 10px;

        img{
            width: 180px;
            height: 180px;
            border-radius: 50%;
            user-select: none;
        }
    }

    ul{
        width: 100%;
        list-style: none;
        display: flex;
        flex-direction: column;
        align-items: center;
        row-gap: 20px;
        user-select: none;

        .itemNav{
            width: 80%;
            display: flex;
            justify-content: center;
            padding: 10px;

            a{
                width: 100%;
                text-align: center;
                text-decoration: none;
                color: var(--white);

                &:hover{
                color: var(--green);
                cursor: pointer;
            }
            }
        }
    }

    footer{
        width: 50%;

        ul{
            width: 100%;
            display: flex;
            flex-direction: row;
            justify-content: space-evenly;
            list-style: none;

            li{
                
                a{
                    svg{
                        cursor: pointer;
                        color:  var(--white);
                        font-size: 17px;
                        transition: all 0.25s ease;
                        will-change: transform;     

                        &:hover{
                            color: var(--green);
                            transform: scale(1.2);
                        }
                    }
                }
            }
        }
    }
}

@media screen and (max-width: 768px) {
    aside{
        transform: translateX(-300px);
        transition: transform 0.3s ease;
        z-index: 9999;
    }

    .isOpen{
        transform: translateX(0);
        z-index: 9999;
    }
}
</style>