window.addEventListener('load', ()=>{
        const canvas = document.querySelector('#canvas');
        const ctx = canvas.getContext('2d');


        canvas.height = window.innerHeight;
        canvas.width = window.innerWidth;

        //Draw boxes, with strokeRect, fillRect
        // ctx.lineWidth = 5;

        // ctx.strokeStyle='red'
        // ctx.strokeRect(50,50,200,200)

        // ctx.strokeStyle='blue'
        // ctx.strokeRect(100,100,200,200)

        // ctx.beginPath();
        // ctx.lineWidth = 4
        // ctx.moveTo(100,100);
        // ctx.lineTo(200,100);
        // ctx.lineTo(200,150)
        // ctx.lineTo(300,140)
        // ctx.lineTo(100,400)
        // ctx.closePath()
        // ctx.stroke()

        let painting = false;

        //eventlisner
        function startPosition(e){
                painting = true
                draw(e)
        }
        
        function finishedPosition(){
                painting = false
                ctx.beginPath()
        }

        function draw(e){
                if(!painting) return;
                ctx.lineWidth = 10
                ctx.lineCap = 'round'

                ctx.lineTo(e.clientX, e.clientY);
                ctx.stroke()
                
                ctx.beginPath();
                ctx.moveTo(e.clientX, e.clientY)
        }


        canvas.addEventListener('mousedown', startPosition)
        canvas.addEventListener('mouseup', finishedPosition)
        canvas.addEventListener('mousemove', draw)
        
        

}
)

