#define INT_MAX         2147483647
#define INT_MIN         -2147483648
#define POSITIVE        1
#define NEGATIVE        -1
#define NOT_INT         -3
 
 
int myAtoi(char* str) {
    int sign = NOT_INT; // 符号
    int acc = 0;        // 累计
    for(int i = 0; str[i] != '\0'; i++) {
        int cur = str[i];
        switch(cur) {
            case '-':
                if(sign == NOT_INT) {
                    sign = NEGATIVE;
                } else {
                    return acc;
                }
                break;
            case '+':
                if(sign == NOT_INT) {
                    sign = POSITIVE;
                } else {
                    return acc;
                }
                break;
            case '0':
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
                if(sign == NOT_INT) {
                    sign = POSITIVE;
                    acc = cur - '0';
                } else if(sign == POSITIVE) {
                    // 正溢出
                    if(cur >= '8') {
                        if(214748364 <= acc) {
                            return INT_MAX;
                        }
                    } else {
                         if(214748365 <= acc) {
                            return INT_MAX;
                        }
                    }
                    acc  = acc * 10 + cur - '0';
                } else if(sign == NEGATIVE) {
                    if(acc == 0) {
                        acc = -1 * (cur - '0');
                    } else {
                        // 负溢出
                        if(cur > '8') {
                            if(-214748364 >= acc) {
                                return INT_MIN;
                            }
                        } else {
                            if(-214748365 >= acc) {
                                return INT_MIN;
                            }
                        }
                        acc  = acc * 10 - (cur - '0');
                    }
                }
                break;
            default:
                if(sign == NOT_INT) {
                    if(cur == ' ') {
                        continue;
                    } else {
                        return 0;
                    }
                } else {
                    return acc;
                }
        }
    }
    return acc;
}