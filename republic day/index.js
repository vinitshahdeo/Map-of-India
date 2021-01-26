/**
 *
 * Code snippet to print 'Map Of India'
 * 
 * @author: Vinit Shahdeo <vinitshahdeo@gmail.com>
 */
const MAGIC_STRING = "TFy!QJu ROo TNn(ROo)SLq SLq ULo+UHs UJq TNn*RPn/QPbEWS_JSWQAIJO^NBELPeHBFHT}TnALVlBLOFAkHFOuFETpHCStHAUFAgcEAelclcn^r^r\\tZvYxXyT|S~Pn SPm SOn TNn ULo0ULo#ULo-WHq!WFs XDt!";

function revertMe (flag) {
    return !flag;
}

var _logCounter = 0,
    _flag = true,
    _magicCounter = MAGIC_STRING.charCodeAt(_logCounter),
    _newLineCounter = 10;

while (_magicCounter !== 0) { 
    _magicCounter = MAGIC_STRING.charCodeAt(_logCounter);
    _logCounter++;
    while (_magicCounter > 64) {   
        _magicCounter--;
        ++_newLineCounter;
        _flag = revertMe(_flag);
        
        if (_newLineCounter === 90) {  
            _newLineCounter = 10;
            process.stdout.write('\n'); 
        } else { 
            ((_logCounter >> 1) << 1 === _logCounter) ? (_flag ? process.stdout.write('1') : process.stdout.write('0')) : process.stdout.write(' '); 
        }
    } 
} 

/*


  _    _                                 
 | |  | |                                
 | |__| | __ _ _ __  _ __  _   _         
 |  __  |/ _` | '_ \| '_ \| | | |        
 | |  | | (_| | |_) | |_) | |_| |        
 |_|  |_|\__,_| .__/| .__/ \__, |        
              | |   | |     __/ |        
  _____       |_|   |_|  _ |___/ _       
 |  __ \                | |   | (_)      
 | |__) |___ _ __  _   _| |__ | |_  ___  
 |  _  // _ \ '_ \| | | | '_ \| | |/ __| 
 | | \ \  __/ |_) | |_| | |_) | | | (__  
 |_|__\_\___| .__/ \__,_|_.__/|_|_|\___| 
 |  __ \    | |                          
 | |  | | __|_|_   _                     
 | |  | |/ _` | | | |                    
 | |__| | (_| | |_| |                    
 |_____/ \__,_|\__, |                    
                __/ |                    
               |___/                     

< /> with <3 by vinitshahdeo

*/
