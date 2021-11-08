import { ref, Ref } from "vue";
import { useScroll } from "@vueuse/core";

export const useScrollCard = (el?: Ref | any) => {

    const scrollZero: Ref<boolean> = ref(true)
    const scrollMaxRight: Ref<boolean> = ref(false)

    const onStop = (): void => {
        scrollZero.value = x.value === 0
        scrollMaxRight.value = x.value + el.value.offsetWidth === el.value.scrollWidth
    }

    const ScrollX = (direction: boolean): void => {
        el.value.classList.add('behavior')
        if (direction) el.value.scrollLeft += 900
        else el.value.scrollLeft -= 900
        el.value.classList.remove('behavior')
    }

    const ScrollTo = (): void => {
        setTimeout(() => window.scrollTo({ top: el.value.offsetTop - 50, behavior: "smooth" }), 500)
    }

    const { x } = useScroll(el, { onStop })

    return { ScrollTo, ScrollX, scrollZero, scrollMaxRight }
}
