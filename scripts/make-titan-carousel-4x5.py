from PIL import Image, ImageDraw, ImageFont
from pathlib import Path
root=Path('/Users/shamil/openclawv2/titan-peptide-lab-v3')
out=root/'public'/'drops'/'titan-source-list-carousel-20260605'
out.mkdir(parents=True, exist_ok=True)
W,H=1080,1350
font_paths=['/System/Library/Fonts/Supplemental/Impact.ttf','/System/Library/Fonts/Supplemental/Avenir Next Condensed.ttc','/System/Library/Fonts/Supplemental/Arial Bold.ttf']
def font(size, idx=0):
    for p in font_paths[idx:]+font_paths[:idx]:
        if Path(p).exists():
            try: return ImageFont.truetype(p,size)
            except Exception: pass
    return ImageFont.load_default()
F1=font(82,0); F2=font(44,1); F3=font(30,2); F4=font(25,2); Fb=font(42,2)
icon=Image.open(root/'public'/'titan-icon.png').convert('RGBA'); icon.thumbnail((78,78))
vial=Image.open(root/'public'/'products'/'bpc157-vial.png').convert('RGBA'); vial.thumbnail((360,520))
spray=Image.open(root/'public'/'products'/'semax-spray.png').convert('RGBA'); spray.thumbnail((330,430))
def bg():
    im=Image.new('RGB',(W,H),'#050706'); px=im.load()
    for y in range(H):
        for x in range(W):
            t=y/H; glow=max(0,1-((x-820)**2+(y-315)**2)/380000)+max(0,1-((x-210)**2+(y-860)**2)/520000)
            px[x,y]=(int(5+14*t), int(9+25*(1-t)+32*glow), int(8+18*t))
    return im.convert('RGBA')
def wrap(d,text,f,maxw):
    lines=[]
    cur=''
    for w in text.split():
        test=(cur+' '+w).strip()
        if d.textbbox((0,0),test,font=f)[2]<=maxw: cur=test
        else:
            if cur: lines.append(cur)
            cur=w
    if cur: lines.append(cur)
    return lines
def draw_text(d,x,y,text,f,fill,maxw,space=10,stroke=0):
    for line in wrap(d,text,f,maxw):
        d.text((x,y),line,font=f,fill=fill,stroke_width=stroke,stroke_fill=(0,0,0,200))
        y+=d.textbbox((0,0),line,font=f)[3]+space
    return y
def pill(d,x,y,text):
    b=d.textbbox((0,0),text,font=F3); w=b[2]+42; h=54
    d.rounded_rectangle((x,y,x+w,y+h),radius=22,fill=(6,18,14,240),outline=(88,255,194,190),width=2)
    d.text((x+21,y+12),text,font=F3,fill=(238,255,248,255))
    return y+h+14
slides=[
('YOUR SOURCE LIST IS NOT VERIFICATION','If the vial cannot be matched to a lot, method, and COA, you are buying a story — not proof.',['LOT MATCH','METHOD NAMED','COA READS CLEAN'],vial),
('THE LABEL IS NOT THE PROOF','Serious research buyers ask one boring question first: does this exact vial match a real test?',['BATCH CODE','HPLC / METHOD','RUO BOUNDARY'],spray),
('IF THEY DODGE THE COA...','do not negotiate with mystery chemistry. Save the checklist before you order anywhere.',['SAVE THIS','AUDIT BEFORE ORDER','FIRST10'],vial),
]
for i,(hook,body,chips,prod) in enumerate(slides,1):
    im=bg(); d=ImageDraw.Draw(im)
    im.alpha_composite(icon,(58,50)); d.text((150,68),'TITAN PEPTIDE LAB',font=Fb,fill=(232,255,246,255)); d.text((150,113),'RESEARCH USE ONLY',font=F4,fill=(117,240,194,230))
    d.polygon([(0,840),(1080,650),(1080,760),(0,955)],fill=(255,188,55,44)); d.line((0,840,1080,650),fill=(255,188,55,150),width=4)
    y=195; y=draw_text(d,60,y,hook,F1,(255,255,238,255),930,space=6,stroke=3); y+=22
    y=draw_text(d,64,y,body,F2,(226,241,233,255),590 if i!=2 else 640,space=8,stroke=1)
    im.alpha_composite(prod,(670 if i!=2 else 700,500 if i!=2 else 590))
    y=760
    for c in chips: y=pill(d,60,y,c)
    d.rounded_rectangle((60,1180,1020,1305),radius=30,fill=(8,18,14,245),outline=(255,189,67,210),width=3)
    d.text((90,1204),'Lot-matched COAs • crypto checkout • 24h dispatch',font=F3,fill=(255,237,188,255))
    d.text((90,1252),'titanpeptidelab.com  •  FIRST10',font=font(50,1),fill=(255,255,246,255))
    im.convert('RGB').save(out/f'slide-{i}.jpg',quality=94)
print(out)
