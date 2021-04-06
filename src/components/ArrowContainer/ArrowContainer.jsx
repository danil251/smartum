import React from "react";
import s from './ArrowContainer.module.css'

function ArrowContainer(props) {
    let img = ''
    if (props.res === 1) {
       img = 'https://www.nicepng.com/png/detail/46-466522_long-arrow-up-arrow-up-png-long.png'
    } else if (props.res === 2) {
        img = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAZlBMVEX///8AAAD8/PwbGxufn5++vr7l5eUoKChvb294eHiAgID19fUUFBTFxcXOzs5DQ0PQ0NDZ2dmtra1WVla0tLS7u7vd3d3t7e2ZmZmTk5OIiIg0NDRISEhQUFBjY2NmZmYqKio2NjaR0KvhAAACNklEQVR4nO3c204CQRBFUXoUb4ggVy+A+v8/aaJRa3yQp0rJnr1ehaROJiBzuntGI0mSJEmSJEmSJEmSJEmSJEmSJEmSBDXftfY2rZ4i0bh9OK+eI03XGjzi+ithW1SPkmTxnbCtqmfJMf1J2NbVw+S4DRGZ36h3IWG7q54mxThGvK+eJsWaH3EVI26qp0mxiBEvqqdJcR4S3m6rp0nxECKeMSM+hoiXzIhPIeLzpHqaFDch4ltXPU2K6xBxVz1MjqsQcc+8iocQ8cCMuA8RX6qHSdHtQsSr6mlSdLMQ8bp6mhS9iDfV06SYPIeIT9XTpJhchoiP1dOk2Mbq5qF6mhTbsxCR2RRfxKvIbIo3ISG0KZ7HiOPqaVL0alRmUxzr/iE0xfPqaVIMrSlm1qhDa4r5EaE1aq8pZtaosSl+ZUbsNcXMiLEp3jMjvoSIS2aNGsvw5e8/3i8bzKEfcHr8HSen1xR3x19/gmJTPD7+8lMUmuLF8VefpNWAriH/c8j/Lh3A/0OGP3/TEOB/l+LvLeL94YwYEH+Pj+9p8F0bvi/Fd974dQv82hN+/RC/Boxfx8fvxcDvp8HvicLva8PvTcTvL8XvEcbv88bv1eeft8CfmcGfe8KfXcOfP8SfIcWfA8af5cafx8c/U2FYzS/x2SbDan6JAfnPiYqtE7EY7V1C5vPa+M/c+7mGxOb3w9fnkNj8fprTA45Gm0NrM+L6mSRJkiRJkiRJkiRJkiRJkiRJkiRJ/887XiYZxpLQu5cAAAAASUVORK5CYII='
    } else if (props.res === 3) {
        img = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTx9IJYNmyV4RMcpMYLyb1nClM2ha5LMrkQNBAfqYO1QEvqc7_H2zmsrQ8SmtxE0I6-AcA&usqp=CAU'
    } else if (props.res === 4) {
        img = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAhFBMVEX///8zMzMdHR0gICC+vr7KysovLy8pKSktLS0XFxcZGRkoKCgiIiIlJSUUFBQeHh7T09Pz8/OXl5fi4uLs7OzY2NgODg5xcXG6urqEhISlpaU2NjZmZmZhYWFERETm5uaxsbFUVFRBQUFZWVmPj49ubm54eHiAgIBMTEyrq6udnZ0GBgbY5+SkAAADkUlEQVR4nO3c23KiQBAGYAdwGBEQxOD5HI1J3v/91pAtAwqdC3Cnuvf/7q3qLsbumWa01wMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD4pxLPS2zH8EQv09xxXSc/vdiO5EleA18VTPBqO5Zn2O5DdeOubIfTvd2nViXu3HZAHUunjqoayPouJmp4l6Dyp7aD6tJrru8TVEqntsPqTKXE/HDELNNZZOoSVK5nO7KOnILa/MRkmBweSoysVTp2akqMoEoz2buN+Sn/bDu89mamvsR8CzLb8bX2FhP5KWdsO762XpYRmSD7Hc2CKDHXIsP+Cabr+312xXDI/ZjvDagSowL2K3ROPkDj7mwH2FK2IUtMeOHeJRZ1B6UbHXMf0KQrYhdz3ccs+7YjbKmvfCrBYMV9KzqPqRVq3HfbAbaUXWqP8nJKzHtINsGY+/QwXTUd5Qu+Zl9ilmSJcdfcS8yYLDE6X9gOsKUtXWKiA/cSs6NLjMO9xPTOZIkxA+4zw8RvnBYWD5B/iSGP8mrIvcSQ08KvJTpO+kwkk7oEvYAsMVe+w0a+2T0kOCNLDDva3dx1tW1uO6aumbD6JmX92xLlR0flb2M2sB3PE/inUoYLct7EVV76Kp7kLdKrqDSLP5KtnitTusgksNBc6ctPhnPyyMtVOUNvZDuaZyiv0lTkMxyWR/ILiQ8xr2zc9vKeollXtm3pRVzTd7fVvXfv4UYlb9p5HOqOJaUYLusuaXkDcmujQ5eJUawbJi4ZNezWx77HRL95ppuuiXFwxH5WWpgTd5/CI/dpYuGdGCmaSMQdy0Q3HzR0OLMdXhcmB6L5C/l9DNX8R+wvKBQ+iMnUcHO/G2LJC6h6w/2qXiE7EM2f/WvgQnokmv9IwLXu3n/R/HfElQVjZDR/RTR/R0bzp66XDrhf7/5GNX93/fvnGfggXp0Kaf594p6w8bnfcCuQzf9TRvOnTv7Om+3wOjEnduLRXkbzp07+hvtlvkLiE81f1d7Q4WZCjP3N3nZ03Tg3N/+BiKZxbf6NKZrT759mofnkb2yH1pVt09g/FrF9+9LU/AX80vmm/uQfi+gXf9U3f9tRdarm5C/hDwfKHk/+uYgJatld8x8K/CesytjfHEScLu54zq0zhgdJhfTHZBpHRmvfjWS8b6uTLU7H43kmcYUCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEArfwAwoT07mkL5lgAAAABJRU5ErkJggg=='
    }
    return (
        <div className={s.container}>
            {img? <img className={s.img} src={img} alt=""/> : '' }
        </div>
    )

}

export default ArrowContainer