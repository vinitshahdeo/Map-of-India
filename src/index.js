/**
 * 
 * Code snippet to print 'Map Of India'
 * 
 * @author: Vinit Shahdeo <vinitshahdeo@gmail.com>
 */
const MAGIC_STRING = "TFy!QJu ROo TNn(ROo)SLq SLq ULo+UHs UJq TNn*RPn/QPbEWS_JSWQAIJO^NBELPeHBFHT}TnALVlBLOFAkHFOuFETpHCStHAUFAgcEAelclcn^r^r\\tZvYxXyT|S~Pn SPm SO]BO JAIN\\BP IAAAIL\\BQ UL\\AR#ULo-WHq!LAJFbAP XDcAP!^0bBN!^0cAN";
var _logCounter = 0,
    _magicCounter = MAGIC_STRING.charCodeAt(_logCounter),
    _newLineCounter = 10;

while (_magicCounter !== 0) { 
    _magicCounter = MAGIC_STRING.charCodeAt(_logCounter);
    _logCounter++;
    while (_magicCounter > 64) {   
        _magicCounter--;
        ++_newLineCounter;
        if (_newLineCounter === 90) {  
            _newLineCounter = 10;
            process.stdout.write('\n'); 
        } else { 
            ((_logCounter >> 1) << 1 === _logCounter) ? process.stdout.write('!') : process.stdout.write(' '); 
        }
    } 
} 

/* 
  _    _                                                             
 | |  | |                                                            
 | |__| | __ _ _ __  _ __  _   _                                     
 |  __  |/ _` | '_ \| '_ \| | | |                                    
 | |  | | (_| | |_) | |_) | |_| |                                    
 |_|__|_|\__,_| .__/| .__/ \__, |             _                      
 |_   _|      | || || |     __/ |            | |                     
   | |  _ __  |_|| ||_|_ _ |___/___ _ __   __| | ___ _ __   ___ ___  
   | | | '_ \ / _` |/ _ \ '_ \ / _ \ '_ \ / _` |/ _ \ '_ \ / __/ _ \ 
  _| |_| | | | (_| |  __/ |_) |  __/ | | | (_| |  __/ | | | (_|  __/ 
 |_____|_| |_|\__,_|\___| .__/ \___|_| |_|\__,_|\___|_| |_|\___\___| 
 |  __ \                | |                                          
 | |  | | __ _ _   _    |_|                                          
 | |  | |/ _` | | | |                                                
 | |__| | (_| | |_| |                                                
 |_____/ \__,_|\__, |                                                
                __/ |                                                
               |___/                                                 

With <3 from @vinitshahdeo
 */