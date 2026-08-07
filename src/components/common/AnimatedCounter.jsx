import useCountUp from "../../hooks/useCountUp";

export default function AnimatedCounter({
    end,
    suffix = "",
    prefix = "",
    duration = 1800,
    isString = false,
}) {

    if (isString) {

        return (
            <>
                {prefix}
                {end}
                {suffix}
            </>
        );

    }

    const value = useCountUp(
        Number(end),
        duration
    );

    return (
        <>
            {prefix}
            {value}
            {suffix}
        </>
    );

}