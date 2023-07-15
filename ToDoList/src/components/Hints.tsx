const Hints = () => {
    return ( 

        <>
            <h3>Animation on delete</h3>
            <p>First, you’d need to maintain a cache of items. This is because you’d need some way to hold on to an item long enough to animate it. You’d want to detect when a item is removed so that you could start the animation process. Finally, you’d want a timer to actually remove the item after animation is complete.</p>
            <p>Reference: https://typeofnan.dev/how-to-animate-items-out-of-an-array-in-react/</p>
        </>


     );
}
 
export default Hints;